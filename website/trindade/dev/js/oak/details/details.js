async function fetchData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  if (id) {
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzY10nMRy1XdLxIsQzj4MqzLc1MMG4P0UXlG7T0dHYmhE3Ts2c05B6Ghw6yMgb33yeV/exec?id=${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        throw new Error('No data found');
      }

      document.getElementById('app_title').textContent = data['name_app'];
      document.getElementById('app_developer').textContent = data['dev_name'];
      document.getElementById('app_description').textContent = data['description'];
      document.getElementById('app_category').textContent = data['category'];
      document.getElementById('app_tags').textContent = data['tag'];
      document.getElementById('number_of_downloads').textContent = data['number_of_downloads'];
      document.getElementById('app_logo').src = data['photo_app'];
      document.getElementById('dev_photo').src = data['dev_photo'];
      document.getElementById('download_link').href = data['download_link'];

      const features = data['Funcionalidades'] ? data['Funcionalidades'].split(','): [];
      const featuresList = document.getElementById('app-features');
      featuresList.innerHTML = '';
      features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'mdui-list-item mdui-ripple';
        li.textContent = feature.trim();
        featuresList.appendChild(li);
      });

      const screenshots = data['Capturas de Tela'] ? data['Capturas de Tela'].split(','): [];
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
    document.getElementById('app-detail').innerHTML = '<p>ID do aplicativo não fornecido na URL.</p>';
  }
}