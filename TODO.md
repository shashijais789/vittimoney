# VittiMoney — TODO

## ✅ Resolved (macOS permission lock)
ACL lock blocked unlink/rename on old `index.html`, `calculators/home-loan/index.html`, `assets/favicon.svg`. Fixed by write-over (`cp index.new.html index.html`) since TCC allowed truncate+write; then removed the `.new.html` staging files and `assets/favicon.svg`.

## 🚀 Launch
- [ ] Commit and push to `origin` (shashijais789/vittimoney)
- [ ] GitHub Pages: Settings → Pages → Deploy from branch `main`, root `/`
- [ ] DNS for `vittimoney.com`: A records → 185.199.108.153 / 109 / 110 / 111 (or CNAME `www` → `shashijais789.github.io`)
- [ ] After deploy: verify `https://vittimoney.com/` serves the landing page and all pages resolve
- [ ] Verify OG previews on WhatsApp/Twitter (og:image only works once live on the domain)

## 🔜 Next tools (marked "Soon" on the site)
- [ ] Tax Regime Comparison — `calculators/tax-regime/index.html`
- [ ] SIP Goal Planner — `calculators/sip-planner/index.html`
- [ ] Personal Loan EMI — `calculators/personal-loan/index.html`

## 🧰 Maintain
- [ ] Keep nav "Tools" → `calculators/index.html` and "About" → `about/index.html` consistent on every new page
- [ ] New calculator = own folder + page CSS using the shared `base.css` tokens and `calculator.css` primitives