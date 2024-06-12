const username = "aquilestrindade";
const repo = "Oak-Web/";
const usermod = "aglsk/";
const baseUrl = "https://" + username + ".github.io/" + repo + usermod + "?id=";
const url = './website/aglsk/?id=';

const appID = localStorage.getItem("appID");

function open(uri) {
   window.location.href = uri;
}

if (appID) {
   open(baseUrl + appID);
} else {
   console.error("appID não está definido");
}