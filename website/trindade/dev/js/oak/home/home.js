const baseUrl = "https://oak-store.github.io/Oak-Web/aglsk/pages/details/?project_dev_name="
var appID = ""

function detailsApp(pName, dName) {
  window.location.href = baseUrl + dName + "&project_name=" + pName
}