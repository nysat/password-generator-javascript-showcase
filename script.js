var characterLength = 8;
var choice = [];

var specialCharacters = ['=', '-', '*', '&', '^', '%', '$', '#', '@', '!', '+'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberOption = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var correctPrompts = addPrompts();

   if (correctPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   }
}
//Generates passwords based on prompts
function generatePassword() {

}
function addPrompts() {
  choice = [];

  characterLength = parseInt(prompt("How many charcaters would you like your password to be? (8 - 128 charcters available"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Please enter a number between 8 - 128')
    return false;
  }
  if (confirm('Lowercase letters?')) {
    choice = choice.concat(lowerCase);
  }
  if (confirm('Uppercase letters?')) {
    choice = choice.concat(upperCase);
  }
  if (confirm('Special characters?')) {
    choice = choice.concat(specialCharacters);
  }
  if (confirm ('Numbers?')) {
    choice = choice .concat(numberOption);
}
return true;
}