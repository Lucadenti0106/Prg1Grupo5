let formulario = document.querySelector("#registroForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emptyErrorMessage = "Por favor complete el campo email.";
let passwordError = "Por favor complete el campo contraseña.";

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let erroresBool = false; 
    if (email.value == "") {
        alert(emptyErrorMessage); 
        erroresBool = true;
    }

    if (password.value == "") {
        alert(passwordError); 
        erroresBool = true;
    }

    if (erroresBool == false) {
        this.submit(); 
    }
});