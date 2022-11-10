// Assignment Code
var generateBtn = document.querySelector("#generate");


var specCharA = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':',
',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', ]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var lettersUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var passOptions =  function () { 
var specialChar = window.prompt("Include Special Characters? Yes or No");
if (!specialChar){return;}
var upperCase =  window.prompt("Include Upper Case letters? Yes or No");
if (!upperCase){return;}
var includeNum = window.prompt("Include Numbers? Yes or No");
if (!includeNum){return;}
var passLength = parseInt(window.prompt("How long? Enter a number from 8 to 128"),10);
if (!passLength){return;} 
if (Number.isNaN(passLength)){alert ("Password length must be a number")}
if (passLength < 8) {
  alert("Password must be a minimum of 8 characters long");
return null;} else if (passLength > 128) {
  alert("Password must be less than 128 characters long");
  return null;
}
var index1 = math.floor(math.random()*specCharA.length);
var index2 = math.floor(math.random()*numbers.length);
var index3 = math.floor(math.random()*letters.length);
var index4 = math.floor(math.random()*lettersUP.length);

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

