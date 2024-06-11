const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const rootElement = document.documentElement;

function checkTheme(e) {
  rootElement.classList.toggle('mdui-theme-light', !e.matches);
  rootElement.classList.toggle('mdui-theme-dark', e.matches);
}

checkTheme(mediaQuery);
mediaQuery.addEventListener('change', checkTheme);