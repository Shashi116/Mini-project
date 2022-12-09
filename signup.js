function valsignup(){
    var val_email =   document.getElementById("email").value;
    var val_pass=   document.getElementById("password").value;
    var val_cpass=   document.getElementById("confirmpass").value;
    const re = /\S+@\S+\.+/g;
    let result = re.test(val_email);
    if(!result){
       //continue
       alert("Enter valid mail ");     
    }
    if(val_email == "")
    {alert("email field can't be empty")
    val_email.style.borderColor='red';}
    
    else if(val_pass.value == "")
    {alert("password field can't be empty" );
    val_pass.style.borderColor='red';}
    
    if(val_cpass==val_pass){
        document.write("loginSuccessful");
    }
    if(val_cpass!=val_pass){alert("Confirm password must be same as password ");}
    
}
