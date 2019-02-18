

function validateForm(){
    var fullName = document.getElementById("username")
    var userEmail = document.getElementById("Email")
    var password = document.getElementById("password1")
   

    if(fullName.value.trim() == ""){
        document.getElementById("Name").innerHTML = "please enter your full name";
        return false;
    }
   
    else if(userEmail.value.trim()== ""){
        document.getElementById("email-text").innerHTML = "please enter your email";
        return false;
    }

    else if(password.value.trim()== ""){
        document.getElementById("pass-text").innerHTML = "please enter your password";
        return false;
    }
    else{
        return true;
    }
}

window.onload = function(){
    document.getElementById("log_in").onsubmit = validateForm;
}