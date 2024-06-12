const API_URL = "https://script.google.com/macros/s/AKfycbzY10nMRy1XdLxIsQzj4MqzLc1MMG4P0UXlG7T0dHYmhE3Ts2c05B6Ghw6yMgb33yeV/exec";
const appsContainer = document.querySelector("#apps_container");

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter dados');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(data => {
      const html = appItem(data.project_name, data.project_dev_name, data.project_photo, data.project_id);
      appsContainer.appendChild(html);
    });
  })
  .catch(error => {
    console.error('Erro: ', error);
    const html = errorCase(error);
    appsContainer.appendChild(html);
  });

function appItem(appname, dev, photo, id) {
  const div = document.createElement('div');
  div.classList.add('list-item', 'mdui-list-item');
  div.addEventListener('click', () => detailsApp(appname, dev)); // Adiciona o evento de clique de forma segura

  const img = document.createElement('img');
  img.width = 20;
  img.height = 20;
  img.src = photo;
  img.alt = 'icon';
  img.classList.add('logo');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');

  const appNameDiv = document.createElement('div');
  appNameDiv.classList.add('app-name');
  appNameDiv.textContent = appname;

  const devNameDiv = document.createElement('div');
  devNameDiv.classList.add('dev-name');
  devNameDiv.textContent = dev;

  infoDiv.appendChild(appNameDiv);
  infoDiv.appendChild(devNameDiv);
  div.appendChild(img);
  div.appendChild(infoDiv);

  return div;
}

function errorCase(error) {
  const div = document.createElement('div');
  div.classList.add('error');

  const p = document.createElement('p');
  p.classList.add('error-text');
  p.textContent = error.message;

  div.appendChild(p);

  return div;
}