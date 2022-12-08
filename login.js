


//document.getElementById("login").addEventListener("click", Login);

function valLogin(){
    var val_email =   document.getElementById("email").value;
    var val_pass=   document.getElementById("password").value;
    const re = /\S+@\S+\.+/g;
    let result = re.test(val_email);
    if(result){
       //continue for login
    }
    else{
        alert("Enter valid mail ");
        //console.log("fail");
    }
    if(val_email == "")
   {alert("email field can't be empty")
    val_email.style.borderColor='red';}

    else if(val_pass.value == "")
   {alert("password field can't be empty" );
    val_pass.style.borderColor='red';}

    else{}
    document.write("loginSuccessful");
}
