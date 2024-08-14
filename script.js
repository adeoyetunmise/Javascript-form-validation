const form = document.getElementById("form")
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const btn = document.getElementById("btn")



const messageContainer = document.querySelector(".message-container")

const message = document.getElementById("message")

let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();

    if(!isValid){
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        return;
    }

    if(password1El.value === password2El.value){
        passwordMatch = true
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';

    }else{
        passwordMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red'
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordMatch){
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}


function processFormData(e){
    e.preventDefault();

    validateForm();

    if(isValid && passwordMatch){
        swal({
            title: "Sent!",
            text: `Successfully Registered ${form.name.value}`,
            icon: "success",
            button: "OK",
          })
    }
}

btn.addEventListener('click', processFormData);