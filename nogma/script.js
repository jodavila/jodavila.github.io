// Nogma Project - Cryptography Tool JavaScript

function updateDateTime() {
    const now = new Date();
    const options = { dateStyle: 'full', timeStyle: 'medium' };
    const formattedDateTime = new Intl.DateTimeFormat('pt-BR', options).format(now);
    document.getElementById('datetime').textContent = formattedDateTime;
}

function open_desc_url() {
    const name = document.getElementById('name').value;
    const decrypted = decryptText(name);
    document.getElementById('decryp').textContent = decrypted;
}

function open_cripto_url() {
    const name = document.getElementById('name').value;
    const encrypted = encryptText(name);
    document.getElementById('crypt').textContent = encrypted;
}

// Simple Caesar cipher for encryption
function encryptText(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode((code - 65 + 3) % 26 + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode((code - 97 + 3) % 26 + 97);
        } else if (code >= 48 && code <= 57) { // Numbers
            return String.fromCharCode((code - 48 + 3) % 10 + 48);
        } else {
            return char; // Keep other characters unchanged
        }
    }).join('');
}

// Simple Caesar cipher for decryption
function decryptText(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode((code - 65 - 3 + 26) % 26 + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode((code - 97 - 3 + 26) % 26 + 97);
        } else if (code >= 48 && code <= 57) { // Numbers
            return String.fromCharCode((code - 48 - 3 + 10) % 10 + 48);
        } else {
            return char; // Keep other characters unchanged
        }
    }).join('');
}

// Alternar entre abas
const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.container');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        containers.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Initialize date/time display
setInterval(updateDateTime, 1000);
updateDateTime();
