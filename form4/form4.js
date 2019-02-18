var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password_confirm = document.getElementById('password_confirm');
    // SELECTING ALL ERROR DISPLAY ELEMENTS
    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');

function validateForms(){
    

    if(username.value == ""){
        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }

    if(username.value.length <3){
        username.style.border = "1px solid red";
        document.getElementById("username_div").style.color = "red";
        name_error.textContent = "username must be more then 3 characters";
        username.focus();
        return false;
    }
    if(email.value == ""){
        email.style.border = "1px solid red";
        document.getElementById("email_div").style.color = "red";
        email_error.textContent = "please enter your email";
        email.focus();
        return false;
    }

    if(password.value  == ""){
        password.style.border = "1px solid red";
        document.getElementById("password_div").style.color = "red";
        password_error.textContent = "please enter your password minimum 4 characters";
        password.focus();
        return false;
    }

    if(password.value != password_confirm.value){
        password.style.border = "1px solid red";
        document.getElementById("pass_confirm_div").style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.innerHTML = "password Dosn't Match";
        return false;
    }
    else{
        return true;
    }
}











window.onload = function(){
    document.getElementById("registration-form").onsubmit = validateForms;
}