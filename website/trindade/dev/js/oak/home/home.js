const username = "oak-store";
const repo = "Oak-Web/";
const usermod = "aglsk/";
const baseUrl = "https://" + username + ".github.io/" + repo + usermod + "?id=";
const url = './website/aglsk/?id=';

function detailsApp(id) {
  open(baseUrl + id);
}

function open(uri) {
  window.location.href = uri;
}