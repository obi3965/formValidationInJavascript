//our first field name is username

document.contact.username.focus();
document.contact.onsubmit = function(){
    var x = this;
    var name = x.username.value;
    var age = x.userage.value;
    var pass = x.userpass.value;
    var repass = x.userrepass.value;
    var patt_pass = /^[A-Za-a0-9]{6,10}$/;
    var email = x.useremail.value;
    var patt_email =  /(.+)@(.+){2,}\.(.+){2,}$/;
    
   
   
    
    if(name.trim() == ""){
       alert("enter name");
        x.username.focus();
        return false;
    }

    else if(age<18 || age>80){
        alert('enter age');
        x.userage.focus();
        return false;
    }
    else if(pass.trim() == ""){
        alert('enter pass');
        x.userpass.focus();
        return false;
    }

    else if(patt_pass.test(pass) ==""){
        alert('enter valid pass');
        x.userpass.focus();
        return false;
    }
   else if(repass!=pass){
       alert('password dosnt/ match');
       x.userrepass.focus();
       return false;
   }

   
   else if(email.trim()== ""){
       alert("enter email");
       x.useremail.focus();
       return false;
   }

   else if(patt_email.test(email) ==false){
    alert("enter valid email");
    x.useremail.focus();
    return false;
}

else if(x.gender[0].checked==false && x.gender[1].checked==false){
    alert("enter your gender")
    x.gender[0].focus();
    return false;
}

else if(x.terms.checked==false){
    alert("choose your terms")
    x.terms.focus();
    return false;
}
else if(x.add.value.trim()==""){
    alert("add your comments");
    x.add.focus();
    return false;
}
 else{
     alert('thanks' + name)
 }
}