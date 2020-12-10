var user=document.getElementById('user').value;
var pass=document.getElementById('pass').value;
var user_error=document.getElementById('user_error').value;
var pass_error=document.getElementById('pass_error').value;


function validate(){
    if(user.length < 9){
        user.style.border = "1px solid red";
        user_error.style.display ="block";
        user.focus();
        return false;
    }
}


