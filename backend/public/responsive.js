function loginValidate(event){
    var mail=document.getElementById("mail").value;
    var password=document.getElementById("pass").value;

    document.getElementById("n1").innerHTML="";
    document.getElementById("n2").innerHTML="";

    if(mail==""){
        document.getElementById("n1").innerHTML="*mail is mandatory";
        return false;
    }
    else if(password==""){
        document.getElementById("n2").innerHTML="*password is mandatory";
        return false;
    }
    localStorage.setItem('userEmail',mail);
    return true;
}

function signupValidate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var cpassword = document.getElementById("cpass").value;

    document.getElementById("n3").innerHTML = "";
    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";
    document.getElementById("n4").innerHTML = "";
    if (name == "") {
        document.getElementById("n3").innerHTML = "*Name is mandatory";
        return false;
    }
    if (email == "") {
        document.getElementById("n1").innerHTML = "*Email is mandatory";
        return false;
    }
    if (password == "") {
        document.getElementById("n2").innerHTML = "*Password is mandatory";
        return false;
    }
    if (password.length < 8) {
        document.getElementById("n2").innerHTML = "*Password must be at least 8 characters long";
        return false;
    }
    if (cpassword == "") {
        document.getElementById("n4").innerHTML = "*Confirm Password is mandatory";
        return false;
    }
    if(password!=cpassword){
        document.getElementById("n4").innerHTML = "*Password Not Matching ";
        return false;
    }
    return true;
}


function forgetpass(event){
    event.preventDefault();
    var mail=document.getElementById("mail").value;
    if(mail==""){
        document.getElementById("n1").innerHTML="*mail is mandatory";
    }
    else{
        var form = document.getElementById('otpform');
        form.style.display = 'block';
    }
    document.getElementById("mail").addEventListener("input",function(){
        document.getElementById("n1").innerHTML="";
    });
}
