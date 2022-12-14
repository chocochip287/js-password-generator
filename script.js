/*
9/29/2022:
No big remaining to-dos as of this writing. See the end of the file for a future experiment based on the 
starter files. Original assignment also placed at the end.
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring password criteria variables
var pwLength = 0;
var pwLowercase = true;
var pwUppercase = true;
var pwNumeric = true;
var pwSpecial = true;
var specCharacters = "!@_+-?"; // this is deliberately not the entire OWASP list of special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var charSet = "";


// Write password to the #password input

function generatePassword() {
  password = "";
  var passwordText = document.querySelector("#password");
  // if all eligible characters are allowed 
  if (pwLowercase && pwUppercase && pwNumeric && pwSpecial) {
    charSet = Array.from(lowercase + uppercase + numbers + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if uppercase letters, numbers, and special characters are allowed
  else if (!pwLowercase && pwUppercase && pwNumeric && pwSpecial) {
    charSet = Array.from(uppercase + numbers + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if numbers and special characters are allowed
  else if (!pwLowercase && !pwUppercase && pwNumeric && pwSpecial) {
    charSet = Array.from(numbers + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if only special characters are allowed
  else if (!pwLowercase && !pwUppercase && !pwNumeric && pwSpecial) {
    charSet = Array.from(specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if only lowercase letters are allowed
  else if (pwLowercase && !pwUppercase && !pwNumeric && !pwSpecial) {
    charSet = Array.from(lowercase);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if only uppercase letters are allowed
  else if (!pwLowercase && pwUppercase && !pwNumeric && !pwSpecial) {
    charSet = Array.from(uppercase);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if only numbers are allowed
  else if (!pwLowercase && !pwUppercase && pwNumeric && !pwSpecial) {
    charSet = Array.from(numbers);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase letters and special characters are allowed
  else if (pwLowercase && !pwUppercase && !pwNumeric && pwSpecial) {
    charSet = Array.from(lowercase + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase letters, uppercase letters, and special characters are allowed
  else if (pwLowercase && pwUppercase && !pwNumeric && pwSpecial) {
    charSet = Array.from(lowercase + uppercase + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase letters, numbers, and special characters are allowed
  else if (pwLowercase && !pwUppercase && pwNumeric && pwSpecial) {
    charSet = Array.from(lowercase + numbers + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase and uppercase letters are allowed
  else if (pwLowercase && pwUppercase && !pwNumeric && !pwSpecial) {
    charSet = Array.from(lowercase + uppercase);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase and uppercase letters and numbers are allowed
  else if (pwLowercase && pwUppercase && pwNumeric && !pwSpecial) {
    charSet = Array.from(lowercase + uppercase + numbers);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if lowercase letters and numbers are allowed
  else if (pwLowercase && !pwUppercase && pwNumeric && !pwSpecial) {
    charSet = Array.from(lowercase + numbers);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if uppercase letters and numbers are allowed
  else if (!pwLowercase && pwUppercase && pwNumeric && !pwSpecial) {
    charSet = Array.from(uppercase + numbers);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if uppercase letters, numbers, and special characters are allowed
  else if (!pwLowercase && pwUppercase && pwNumeric && pwSpecial) {
    charSet = Array.from(uppercase + numbers + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if uppercase letters and special characters are allowed
  else if (!pwLowercase && pwUppercase && !pwNumeric && pwSpecial) {
    charSet = Array.from(uppercase + specCharacters);
    for (i=0; i <= pwLength; i++) {
      var random = Math.floor(Math.random() * charSet.length);
      password += charSet[random];
    }
  } // if ya broke it
  else {
    alert("You cannot create a blank password. Please try again and select OK for at least one of the following: lowercase letters, uppercase letters, numbers, or special characters.")
  }
  passwordText.value = password;
}

// Add event listener to generate button to establish password criteria then generate a password
generateBtn.addEventListener("click", lengthPrompt);

// Password criteria prompts

// prompts the user to enter a value to determine password length
function lengthPrompt() {
  pwLength = prompt("Please enter a number between 8 and 128 to determine your password's length.", "[enter your number here]");
  while (pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
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
  pwUppercase = confirm("Inlcude uppercase characters in your password? OK = yes, Cancel = no.");
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
  generatePassword();
}

/*
Initially the assignment has generatePassword() inside of writePassword(). I had issues passing the generated
password into the textarea in the HTML file even though I could log it correctly so I removed the outer function. 
I want to come back and experiment with this to figure out how to make it work with the layered functions.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // generates password accounting for the user's prompt choices
  function generatePassword() {
    //password = "";
    // if all prompts are true
    if (pwLowercase && pwUppercase && pwNumeric && pwSpecial) {
      charSet = Array.from(lowercase + uppercase + numbers + specCharacters);
      for (i=0; i <= pwLength; i++) {
        var random = Math.floor(Math.random() * charSet.length);
        password += charSet[random];
      }
    } console.log(password);
  }
  
  passwordText.value = password;

  Assignment:
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
*/