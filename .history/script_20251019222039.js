const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener('submit' , function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //initialize valiadtion variables
    var isValid = true;
    const messages = [];
})