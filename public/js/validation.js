function validation() {
    var user=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var confirmpass=document.getElementById('confirmpass').value;
    var contact=document.getElementById('contact').value;

    if(user == ""){
        document.getElementById('username').innerHTML = "**please fill the username field";
        return false;
    }
    if((user.length <= 2) || (user.length > 20)){
        document.getElementById('username').innerHTML = "** user length must be between 2 and 20 ";
        return false;

    }
    


    if(!isNaN(user)){
        document.getElementById('username').innerHTML = "**only characters are allowed";
        return false;
    }





    if(email == ""){
        document.getElementById('emails').innerHTML = "**please fill the email field";
        return false;
    }
    if(email.indexOf('@') <=0){
        document.getElementById('emails').innerHTML = "**@Invalid position";
        return false;
    }
    if((email.charAt(email.length-4)!='.') &&(email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML = "**.Invalid position";
        return false;

    }

    if(password == ""){
        document.getElementById('passwords').innerHTML = "**please fill the password field";
        return false;
    }
    if((password.length <=5 )||(password.length >20)){
        document.getElementById('passwords').innerHTML = "**password length must be between 5 and 20";
        return false;
    }
    if(password!=confirmpass){
        document.getElementById('password2').innerHTML = "**password are not matching";
        return false;
    }


    if(confirmpass == ""){
        document.getElementById('password2').innerHTML = "**please fill the confirm password  field";
        return false;
    }


    if(contact == ""){
        document.getElementById('contactno').innerHTML = "**please fill the contact field";
        return false;
    }

    if(isNaN(contact)){
        document.getElementById('contactno').innerHTML = "**only numbers are allowed";
        return false;
    }
    if(contact.length!=10){
        document.getElementById('contactno').innerHTML = "**contact number must be 10 digits";
        return false;
    }
    return (true);


}