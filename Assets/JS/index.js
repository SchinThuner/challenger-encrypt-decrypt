
function encrypt() {
    let textToEncrypt = document.getElementById("textInfo").value;
    const textCheck = checkCaracters(textToEncrypt);
    if (textCheck === 'incorrentFormat') {
        alert(`Não é permitido o uso de de caracteres Maiusculos com acento ou campo em branco`);
        return null;
    }
    const encryptText = [['e','i','a','o','u'],['enter','imes','ai','ober','ufat']];

    let regex = new RegExp(textToEncrypt, 'g');
    const encryptedArr = [];

    for (let i = 0; i < textToEncrypt.length; i++) {
        const char = textToEncrypt[i];
        let j;

        for (j = 0; j < encryptText[0].length; j++) {
            if (char.toLowerCase() === encryptText[0][j]) {
                encryptedArr.push(encryptText[1][j]);
                break;
            }
        }
        if (j === encryptText[0].length) {
            encryptedArr.push(char);
        }
    }

    const encryptedText = encryptedArr.join('');
    showText(encryptedText);
    console.log(encryptedText);

}

function decrypt() {
    let encryptedText = document.getElementById("textInfo").value;
    const textCheck = checkCaracters(encryptedText);
    if (textCheck === 'incorrentFormat') {
        alert(`Não é permitido o uso de de caracteres Maiusculo, com acento ou campo em branco`);
        return null;
    }
    const caractersToChange = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
        "bah": "b" 
    };
    text = encryptedText;
    for (const [encrypt, decrypt] of Object.entries(caractersToChange)) {
        text = text.split(encrypt).join(decrypt);
    }
    showText(text);
    console.log(text);

}

function checkCaracters(textToCheck){
    if (!textToCheck.trim()) {
       return 'incorrentFormat';
    } else if (/[A-Z-À-Ú-á-ú]/.test(textToCheck)) {
        return 'incorrentFormat';
    } 
    return 'correctFormat';

}

function showText(textToShow) {
    const showInTextArea = document.getElementById("textArea");
    const copyButton = document.getElementById("copyButton");
    const imageConsole = document.getElementById("imageConsole");
    const titleConsole = document.getElementById("titleConsole");

    titleConsole.style.display = 'none';
    imageConsole.style.display = 'none';
    copyButton.style.display = 'block';
    
    showInTextArea.innerHTML = '';
    showInTextArea.innerHTML += textToShow;
}

function copy() {
    const textAreaToCopy = document.getElementById("textArea");

    let tempCopy = document.createElement("input");
    console.log(`valor do ${textAreaToCopy.textContent}`);
    tempCopy.value = textAreaToCopy.textContent;
    document.body.appendChild(tempCopy);
    tempCopy.select();
    
    document.execCommand("copy");
    document.body.removeChild(tempCopy);
    console.log(`texto copiado`);
}
