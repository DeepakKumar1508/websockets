const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?";

    let chars = "";

    if(document.getElementById("uppercase").checked)
        chars += uppercase;

    if(document.getElementById("lowercase").checked)
        chars += lowercase;

    if(document.getElementById("numbers").checked)
        chars += numbers;

    if(document.getElementById("symbols").checked)
        chars += symbols;

    if(chars === ""){
        alert("Please select at least one option");
        return;
    }

    const length = parseInt(lengthSlider.value);

    let password = "";

    for(let i = 0; i < length; i++){
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    document.getElementById("password").value = password;

    updateStrength(password);
}

function copyPassword(){

    const password =
    document.getElementById("password").value;

    if(password === ""){
        alert("Generate password first");
        return;
    }

    navigator.clipboard.writeText(password);
    alert("Password copied!");
}

function updateStrength(password){

    let strength = "Weak";

    if(password.length >= 8)
        strength = "Medium";

    if(
        password.length >= 12 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password)
    ){
        strength = "Strong";
    }

    document.getElementById("strengthText").textContent = strength;
}

window.onload = generatePassword;