document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.querySelector(".contact-form");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    let errorEmail= document.querySelector(".email");
    let errorPassword = document.querySelector(".password");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (email.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        if (password.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            window.location.href = "login.html";
        }
    });
});