const devButton = document.getElementById('devButton');
    devButton.addEventListener('click', () => {
      window.open('https://github.com/Oak-Store', '_blank'); 
    });
   
const githubButton = document.getElementById('repoButton');
    githubButton.addEventListener('click', () => {
      window.open('https://github.com/Oak-Store/Oak-Web', '_blank');
});

const dialog = document.querySelector(".lang-dialog");
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector("mdui-button");

openButton.addEventListener("click", () => dialog.open = true);
closeButton.addEventListener("click", () => dialog.open = false);

const toggleButton = document.getElementById('themeToggleButton');
    toggleButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('mdui-theme-dark');
});

alert("oie")
