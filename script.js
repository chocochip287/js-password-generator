/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring password criteria variables
var pwLength = 0;
var pwLowercase = true;
var pwUppercase = true;
var pwNumeric = true;
var pwSpecial = true;
var specCharacters = ["!", "@", "_", "+", "-", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    
  }

  passwordText.value = password;

}

// Add event listener to generate button to establish password criteria then generate a password
generateBtn.addEventListener("click", lengthPrompt);

// Password criteria prompts

// prompts the user to enter a value to determine password length
function lengthPrompt() {
  pwLength = prompt("Please enter a number between 8 and 128 to determine your password's length.", "[enter your number here]");
  while (pwLength > 128 || pwLength < 8) {
    pwLength = prompt("You must enter a number between 8 and 128.", "[please enter a valid number]");
  }
  lowercasePrompt();
}
// prompts the user to choose whether or not to allow lowercase characters
function lowercasePrompt() {
  pwLowercase = confirm("Inlcude lowercase characters in your password? OK = yes, Cancel = no.");
  uppercasePrompt();
}
// prompts the user to choose whether or not to allow uppercase characters
function uppercasePrompt() {
  pwLowercase = confirm("Inlcude lowercase characters in your password? OK = yes, Cancel = no.");
  numPrompt();
}
// prompts the user to choose whether or not to allow numbers
function numPrompt() {
  pwNumeric = confirm("Inlcude numbers in your password? OK = yes, Cancel = no.");
  specPrompt();
}
// prompts the user to choose whether or not to allow special characters
function specPrompt() {
  pwSpecial = confirm("Inlcude special characters in your password? OK = yes, Cancel = no.");
  writePassword();
}