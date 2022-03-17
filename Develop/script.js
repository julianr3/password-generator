// Assignment Code
var generateBtn = document.querySelector("#generate");
// this launches a prompt for user-input password length requirement
var length = Number(prompt("How many characters would you like to use for your password?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("How many characters would you like to use for your password? (Length MUST be between 8-128 characters)"));

// this is a list of requirements to confirm
var uppers = confirm("Would you like to include uppercase letters?");
var lowers = confirm("Would you like to include lowercase letters?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);