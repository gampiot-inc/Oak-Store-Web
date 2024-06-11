const toggleButton = document.getElementById('themeToggleButton');

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('mdui-theme-dark');
});