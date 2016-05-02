var crypto = require('crypto-js');

var secretMessage = {
	name: 'Ivan',
	secretName: '007'
};

var secretKey = '123abc';

// Encrypt Message
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted message: ' + encryptedMessage);

// Decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted message: ' + decryptedMessage);
console.log(secretMessage.secretName);