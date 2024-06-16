const API_URL = "https://oak-api-alpha.vercel.app/apps/";
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
    console.log(data)
    const html = appItem(data.app_name, data.app_dev_name, data.app_photo, data.app_id);
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
  div.classList.add('list-item',
    'mdui-list-item');
  div.addEventListener('click',
    () => detailsApp(appname, dev));

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