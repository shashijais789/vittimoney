# AGENTS.md — VittiMoney

## Project
Static, multi-page site on GitHub Pages. Custom domain `vittimoney.com` (see `CNAME`). No build step — pure HTML/CSS/JS.

## Stack
- Plain HTML5 + CSS3 + vanilla JS (no frameworks, no package.json)
- Fonts: **Inter** (display/body) + **JetBrains Mono** (figures/labels). Never use serif/script fonts.

## Architecture
- `assets/css/base.css` — design tokens, reset, nav, buttons, footer (loads on every page)
- `assets/css/*.css` — one page-specific sheet per section: `home.css`, `calculator.css` (shared by all calculators), `about.css`, `tools.css`, `legal.css`
- `assets/js/theme.js` — light/dark toggle (loads on every page; keeps `data-theme` on `<html>`)
- Pages: `index.html`, `about/`, `calculators/`, `calculators/<tool>/`, `disclaimer.html`, `privacy.html`, `terms.html`, `404.html`

## Rules
- **Links are relative, never root-absolute** (`assets/...`, not `/assets/...`) so pages work from both `file://` and the domain root. Prefer explicit `index.html` targets (e.g. `calculators/home-loan/index.html`) over bare dir paths.
- **Brand:** always "VittiMoney" (exact casing) everywhere visible. Logo = `<a class="brand"><span class="brand-mark">v</span>VittiMoney</a>`, links to `index.html`.
- **Design tokens:** use `var(--...)` from `base.css` (gold accent, dark/light themes, radii, shadows). No hardcoded hex outside token definitions. Add new palettes as tokens, not inline colors.
- **New calculator:** own folder `calculators/<name>/index.html`, load `base.css` + `calculator.css` + `../../assets/js/theme.js`, reuse `.page-head`, `.form-card` primitives, include shared nav/footer.
- **Nav consistency:** Tools → `calculators/index.html`, About → `about/index.html`, id `#tools` anchor is homepage only.
- **Currency:** INR (`₹`) default everywhere (India-first brand) — calculators still allow other currencies.
- **No external tracking/analytics.** Nothing you type leaves the browser.

## Deploy
`git add -A && git commit && git push`. GitHub Pages deploys `main` from repo root; `CNAME` = `vittimoney.com`. See `TODO.md` for the pending permission-lock fix and DNS records.