const API_URL = "https://raw.githubusercontent.com/Oak-Store/Oak-Android/main/test/database/database.json";
const appsContainer = document.querySelector("#apps_container");

fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error to get data');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(appData => {
            const html = appItem(appData.name_app, appData.dev_name, appData.photo_app);
            appsContainer.innerHTML += html;
        });
    })
    .catch(error => {
        console.error('Error: ', error);
        const html = errorCase(error)
        appsContainer.innerHTML += html;
    });

function appItem(appname, dev, photo) {
    return `
        <div class="list-item mdui-list-item" rounded style="margin-bottom: 6px;" >
            <img width="20%" height="20%" src="${photo}" alt="icon" class="logo">
            <div class="info">
                <div class="app-name">${appname}</div>
                <div class="dev-name">${dev}</div>
            </div>
        </div>
    `;
}

function errorCase(error) {
  return `
  <div class="error">
     <p class="error-text"> ${error} </p>
  </div>`;
}