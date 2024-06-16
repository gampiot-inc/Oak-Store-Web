const dialog = document.querySelector(".lang-dialog");
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector("mdui-button");

openButton.addEventListener("click", () => dialog.open = true);
closeButton.addEventListener("click", () => dialog.open = false);