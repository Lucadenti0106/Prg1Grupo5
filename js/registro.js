document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.querySelector("#registroForm");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    let errorEmail = document.querySelector("#emailError");
    let errorPassword = document.querySelector("#passwordError");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        let erroresBool = false;

        if (email.value == "") {
            errorEmail.style.display = "block";
            errorEmail.innerText = "Por favor complete el campo";
            erroresBool = true;
        } else {
            errorEmail.style.display = "none";
        }

        if (password.value == "") {
            errorPassword.style.display = "block";
            errorPassword.innerText = "Por favor complete el campo";
            erroresBool = true;
        } else {
            errorPassword.style.display = "none";
        }

        if (erroresBool == false) {
            this.submit();
        }
    });
});