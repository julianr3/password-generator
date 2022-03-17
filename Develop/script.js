// Javascript Code
var generateBtn = document.querySelector("#generate");
// this launches a prompt for user-input password length requirement
var length = Number(prompt("How many characters would you like to use for your password?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("How many characters would you like to use for your password? (Length MUST be between 8-128 characters)"));

// this is a list of requirements to confirm
var uppers = confirm("Would you like to include uppercase letters?");
var lowers = confirm("Would you like to include lowercase letters?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include special characters?");

// IF no pwd types are selected, this alert will display
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  // list of questions to confirm with user
  uppers = confirm("Would you like to include uppercase letters?");
  lowers = confirm("Would you like to include lowercase letters?");
  numbers = confirm("Would you like to include numbers?");
  symbols = confirm("Would you like to include special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);