/* vitti — theme.js
   Light/dark toggle, shared by every page. Expects two buttons with
   ids #btn-dark and #btn-light in the nav (see base.css .theme-toggle). */
(function () {
  var root = document.documentElement;
  var btnDark = document.getElementById('btn-dark');
  var btnLight = document.getElementById('btn-light');
  if (!btnDark || !btnLight) return;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    btnDark.classList.toggle('active', theme === 'dark');
    btnLight.classList.toggle('active', theme === 'light');
    try { localStorage.setItem('vitti-theme', theme); } catch (e) {}
  }

  var saved = 'dark';
  try {
    saved = localStorage.getItem('vitti-theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  } catch (e) {}
  apply(saved);

  btnDark.addEventListener('click', function () { apply('dark'); });
  btnLight.addEventListener('click', function () { apply('light'); });
})();
