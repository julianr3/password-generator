// Assignment Code
var generateBtn = document.querySelector("#generate");
// this launches a prompt for user-input password length requirement
var length = Number(prompt("How many characters would you like to use for your password?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("How many characters would you like to use for your password? (Length MUST be between 8-128 characters)"));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);