document.addEventListener("DOMContentLoaded", function() {
let formulario = document.querySelector(".contact-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");



formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let erroresBool = false; 

    if (email.value == "") { 
        erroresBool = true;
    }

    if (password.value == "") {
        erroresBool = true;
    }

    if (erroresBool == false) {
        this.submit(); 
    }
});
});