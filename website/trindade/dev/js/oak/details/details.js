var DOWNLOAD_URL = ""

async function fetchData() {
  const params = window.location.hash.substring(2).split('/')
  const project_name = params[1]
  const project_dev_name = params[0]

  if (project_dev_name && project_name ) {
      try {
        const response = await fetch(`https://oak-api-alpha.vercel.app/app/${project_dev_name}/${project_name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)

        if (!data || Object.keys(data).length === 0) {
          throw new Error('No data found');
        }

        document.getElementById('app_title').textContent = data['app_name'];
        document.getElementById('app_developer').textContent = data['app_dev_name'];
        document.getElementById('app_description').textContent = data['app_description'];
        document.getElementById('app_category').textContent = data['app_category'];
        document.getElementById('app_tags').textContent = data['app_tags'];
        document.getElementById('number_of_downloads').textContent = data['app_downloads'];
        document.getElementById('app_logo').src = data['app_photo'];
        document.getElementById('dev_photo').src = data['app_dev_photo'];
        DOWNLOAD_URL = data['app_download_url'];

        const features = data['app_functions'] ? data['app_functions'].split(','): [];
        const featuresList = document.getElementById('app-features');
        featuresList.innerHTML = '';
        features.forEach(feature => {
          const li = document.createElement('li');
          li.className = 'mdui-list-item mdui-ripple';
          li.textContent = feature.trim();
          featuresList.appendChild(li);
        });

        const screenshots = data['app_screenshots'] ? data['app_screenshots'].split(','): [];
        const screenshotsDiv = document.getElementById('app-screenshots');
        screenshotsDiv.innerHTML = '';
        screenshots.forEach(screenshot => {
          const div = document.createElement('div');
          div.className = 'mdui-col-xs-4';
          const img = document.createElement('img');
          img.src = screenshot.trim();
          img.className = 'mdui-img-fluid';
          div.appendChild(img);
          screenshotsDiv.appendChild(div);
        });
      } catch (error) {
        console.error('Fetch error: ', error);
        document.getElementById('app-detail').innerHTML = `<p>Erro ao carregar os dados: ${error.message}</p>`;
      }
  } else {
    document.getElementById('app-detail').innerHTML = '<p>Nome do aplicativo não fornecido na URL.</p>';
  }
}

function openDownloadLink () {
  window.location.href = DOWNLOAD_URL
}

fetchData()
