const inputBox = document.querySelector('#password');
const genPassBtn = document.querySelector("button");
const copyPass = document.querySelector(".copy-img1");

const lengthOfPass = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLowerCase();
const numbers = "0123456789"
const symbol = "!@#$%^&*()-_+={}[]:;\"'<,>.?/|\ *~`"
const allchar = uppercase + lowercase + numbers + symbol;

function createPassword(){
    let password = '';
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    while(lengthOfPass > password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)]
    }
    inputBox.value = password;
}

function copyPassword(){
    inputBox.select();
    document.execCommand('copy');
}