// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
  let userchosen = []

  const lengthInput = window.prompt("How many characters would you like your password to contain?")
  if (lengthInput < 8) {
    alert("minimum characters need to be 8 or more")
    return
  }
  else if (lengthInput > 128) {
    alert("No more than 128 characters")
    return
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  const specialCharConfirm = window.confirm("Click OK to confirm including special characters");
  const upperCaseConfirm = window.confirm("Click OK to confirm including uppercase characters");
  const lowerCaseConfirm = window.confirm("Click OK to confirm including lowercase characters");
  const numericConfirm = window.confirm("Click OK to confirm including numeric characters");

  // THEN my input should be validated and at least one character type should be selected
  if (!specialCharConfirm && !upperCaseConfirm && !lowerCaseConfirm && !numericConfirm) {
    alert("Need to have at least one character.")
  };
  if (upperCaseConfirm) {
    userchosen = userchosen.concat(upperCase)
  }
  if (lowerCaseConfirm) {
    userchosen = userchosen.concat(lowerCase)

  }
  if (numericConfirm) {
    userchosen = userchosen.concat(numeric)
  }
  if (specialCharConfirm) {
    userchosen = userchosen.concat(specialCharacters)
  }



  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the pa

  let password = ""

  for (let i = 0; i < lengthInput; i++) {
    password += userchosen[Math.floor(Math.random() * userchosen.length)];
  }



  // return password with appropriate character
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria