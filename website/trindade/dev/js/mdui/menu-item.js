const devButton = document.getElementById('devButton');

devButton.addEventListener('click', () => {
      window.open('https://github.com/Oak-Store', '_blank'); // Atualize a URL para a página de desenvolvedores específica, se houver.
});

const githubButton = document.getElementById('repoButton');

githubButton.addEventListener('click', () => {
      window.open('https://github.com/Oak-Store/Oak-Web', '_blank');
});