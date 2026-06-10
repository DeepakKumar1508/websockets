function generatePassword() {

let chars = "";

if(document.getElementById("uppercase").checked)
chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(document.getElementById("lowercase").checked)
chars += "abcdefghijklmnopqrstuvwxyz";

if(document.getElementById("numbers").checked)
chars += "0123456789";

if(document.getElementById("symbols").checked)
chars += "!@#$%^&*()_+[]{}<>?";

const length =
document.getElementById("length").