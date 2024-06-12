const url = '../../../../../aglsk'

function detailsApp(id) {
  open(url + `/?id=${id}`);
}

function open(uri) {
  window.location.href = uri;
}