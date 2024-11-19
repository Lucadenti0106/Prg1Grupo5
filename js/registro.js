document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validar email
        if (email.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validar contraseña
        if (password.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Prevenir el envío si no es válido
        if (!isValid) {
            event.preventDefault();
        } else {
            // Redirigir al formulario de login
            window.location.href = "login.html";
        }
    });
});