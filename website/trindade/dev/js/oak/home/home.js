
const baseUrl = "https://aquilestrindade.github.io/Oak-Web/trindade/dev/js/oak/details/?id="
const appID = ""

function detailsApp(id) {
   appID = id
   localStorage.setItem("appID", appID);
   window.location.href = baseUrl + appID
}