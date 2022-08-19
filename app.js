const pw = document.getElementById("pass");
const copy = document.getElementById("copy");
const lengthL = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
const number = document.getElementById("number");
const upperLetters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnñopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "(-).$%#&[+]_=|~!@";


function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    const leng = lengthL.value;
    let password = "";

    for (let i = 0; i < leng; i++) {
        const x = generateX();
        password += x;
    }
    pw.innerText = password;
}


// Function generateX
function generateX(){
    const genpass = [];

    if (upperLetters.checked) { genpass.push(getUppercase());   }
    if (lowerLetters.checked) { genpass.push(getLowercase());   }
    if (number.checked) {   genpass.push(getNumber());  }
    if (symbol.checked) {   genpass.push(getSymbol());  }

    if (genpass.length === 0) return "";
    return genpass[Math.floor(Math.random() * genpass.length)];
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw.innerText;

    if(!password){ return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password Copied to Clipboard");
});