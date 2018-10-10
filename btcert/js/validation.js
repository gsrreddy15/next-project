function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePassword(s) {
  var re = /[a-z]\d|\d[a-z]/i;
  return re.test(s) && s.length > 3;
}
function onValidate(){
  var email = document.getElementById("inputUsername").value;
  var password = document.getElementById("inputPassword").value;

  if(validateEmail(email)){
    if(validatePassword(password)){
      alert("Login success");
    }
    else{
      alert("invalid password");
    }
  }
  else{
    alert("invalid email");
  }

}

function onValidateRegistration(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var confPass  = document.getElementById("inputConfPassword").value;

  // alert(email, password, confPass);
  if(validateEmail(email)){
    if(validatePassword(password)){
      if(password == confPass){

      alert("Registration success");
    }
    else{
      alert("Passwords don't match");
    }


    }
    else{
      alert("invalid password");
    }
  }
  else{
    alert("invalid email");
  }

}
