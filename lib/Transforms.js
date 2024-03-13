const CryptoJS = require("crypto-js");
const md5 = require('md5')

const upcase = (value) => {
  return String(value).toUpperCase()
}

const downcase = (value) => {
  return String(value).toLowerCase()
}

const aesEncrypt = (value) => {
  // Retrieve the secret key from environment variables
  const secretKey = process.env.ENCRYPTION_KEY ? CryptoJS.enc.Utf8.parse(process.env.ENCRYPTION_KEY) : null;
  if (!secretKey) {
    throw new Error("ENCRYPTION_KEY is not set in the environment variables.");
  }
  
  const encrypted = CryptoJS.AES.encrypt(value, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  
  return encrypted;
}

module.exports = {
  md5,
  upcase,
  downcase,
  aesEncrypt
}
