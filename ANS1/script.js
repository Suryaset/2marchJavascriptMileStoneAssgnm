// let password = document.getElementById("password");
// let confirmPass = document.getElementById("confirm");

function Validate() {
    var password = document.getElementById("pswd1").value;
    var confirmPassword = document.getElementById("pswd2").value;
    if (password != confirmPassword) {
        alert("Passwords didn't match. Password validation unsuccessful");
        return false;
    }
    else{
        alert("Password matched. Password validation successful");
        return true;
    }
}

