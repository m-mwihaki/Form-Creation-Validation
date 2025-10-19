document.addEventListener("DOMContentLoaded", function () {

    //form and feedback selection
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
 
// form submission event listener
form.addEventListener('submit' , function(event) {
    event.preventDefault();

// retrieve and trim input values
    const username = document.getElementById("username").Value.trim();
    const email = document.getElementById("email").Value.trim();
    const password = document.getElementById("password").Value.trim();

//initialize valiadtion variables
    let isValid = true;
    const messages = [];

//username valiadation
    if (username.length < 3
})
})