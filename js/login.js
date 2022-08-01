

function validateform(){
    var email = document.login.email.value;
    var password = document.login.password.value;

        if(email==null || email==""){
            document.getElementById("#error").innerHTML = ("Email cannot be empty");
        }   else if(password == "" || password.lenght <= 6){
            document.getElementById("#pError").innerHTML = ("Password must be at least 7 characters long");
        }
}