function generatePassword() {

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const length = document.getElementById("length").value;

let password = "";

for(let i=0;i<length;i++) {
password += chars.charAt(
Math.floor(Math.random()*chars.length)
);
}

document.getElementById("password").value = password;
}

function copyPassword() {

const password =
document.getElementById("password").value;

navigator.clipboard.writeText(password);

alert("Password Copied!");
}