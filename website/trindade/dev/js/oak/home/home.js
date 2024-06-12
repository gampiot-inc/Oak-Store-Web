const url = 'https://oak-store.github.io/Oak-Web/aglsk'

function detailsApp(id) {
  open(url + `/?id=${id}`);
}

function open(uri) {
  window.location.href = uri;
}