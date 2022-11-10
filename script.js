// Assignment Code



var specCharA = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':',
  ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function passOptions() {
  var specialChar = confirm("Include Special Characters? Click OK for yes");
  var letterOpt = confirm("Include letters? Click OK for yes");
  if (letterOpt) { var upperCase = confirm("Include Upper Case letters? Click OK for yes"); }
  else { upperCase = false; }
  var includeNum = confirm("Include Numbers? Click OK for yes");
  if (!specialChar && !letterOpt && !includeNum) { alert("Password must have characters"); return null; }
  var passLength = parseInt(window.prompt("How long? Enter a number from 8 to 128"), 10);
  if (!passLength) { alert("You must choose a password length"); return null; }
  if (Number.isNaN(passLength)) { alert("Password length must be a number"); return null;}
  if (passLength < 8) {
    alert("Password must be a minimum of 8 characters long");
    return null;
  } else if (passLength > 128) {
    alert("Password must be less than 128 characters long");
    return null;
  }
  var userPassOpt = {
    length: passLength,
    hasSpecChar: specialChar,
    hasLetters: letterOpt,
    hasUpLetters: upperCase,
    hasNum: includeNum
  };
  console.log(userPassOpt);
  return userPassOpt;
}

function generatePassword() {
  var userChoices = passOptions();
  if (!userChoices) { return null; }
  var passwordArr = [];
  var charArray = [];
  if (userChoices.hasLetters) {
    charArray = charArray.concat(letters);
  }
  if (userChoices.hasSpecChar) {
    charArray = charArray.concat(specCharA);
  }
  if (userChoices.hasUpLetters) {
    charArray = charArray.concat(lettersUp);
  }
  if (userChoices.hasNum) {
    charArray = charArray.concat(numbers);
  }
  console.log(charArray);
  for (var i = 0; i < userChoices.length; i++) {
    var passChar = charArray[Math.floor(Math.random() * charArray.length)];
    passwordArr.push(passChar);
  }
  return passwordArr.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

