const form =
document.querySelector(
".contact-form"
);

if(form){

form.addEventListener(
"submit",
() => {

localStorage.setItem(
"lastContact",
new Date().toLocaleDateString()
);

}
);

}