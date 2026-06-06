const timestampField =
document.querySelector("#timestamp");

timestampField.value =
new Date().toISOString();

const openButtons =
document.querySelectorAll(".open-modal");

openButtons.forEach(button => {

button.addEventListener("click", event => {

event.preventDefault();

const modalId =
button.dataset.modal;

document
.getElementById(modalId)
.showModal();

});

});

const closeButtons =
document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {

button.addEventListener("click", () => {

button.closest("dialog").close();

});

});