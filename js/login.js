let formulario = document.querySelector(".contact-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errorEmail= document.querySelector(".email");
let errorPassword = document.querySelector(".password");

let emptyErrorMessage = "Porfavor complete el campo mail";
let passwordError = "Porfavor complete el campo contraseña";


formulario.addEventListener("submit", function(event) {
   
    event.preventDefault();


        
    
    if (email.value == "") {
        errorEmail.style.display = "block";
        errorEmail.innerText = emptyErrorMessage;  
        erroresBool = true;    
    }
    else {
    
        errorEmail.style.display = "none";
    }

    if (password.value == "") {
        errorPassword.style.display = "block";
        errorPassword.innerText = passwordError;  
        erroresBool = true;    
    }
    else {
    
        errorPassword.style.display = "none";
    }
    
    if(erroresBool == false){
        this.submit() 
    }

});
