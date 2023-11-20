// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  
  
  
  specCharUser=0;
  capCharUser=0;
  lowCharUser=0;
  numCharUser=0;
  
  
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var lenght= parseInt(prompt("Chosee the lenght of your Password: type a number between 8 and 128"));
      if(lenght < 8 || lenght > 128){
        alert("Chose a number between 8 and 128");
        return
      }
  
      var hasCapital=confirm("Do you want to include capital letters?");
      if(hasCapital){
       var userPrompt=prompt(" How many capital letters would you like?");
       specCharUser=parseInt(userPrompt);
      }
      var hasLowercase=confirm("Do you want to include lowercase letters?");
      if(hasLowercase){
        var userPrompt=prompt(" How many lowercase letters would you like?");
        lowCharUser=parseInt(userPrompt);
       }
      var specialCharacters=confirm("Do you want to include special characters letters?");
      if(specialCharacters){
        var userPrompt=prompt(" How many special characters would you like?");
        specCharUser=parseInt(userPrompt);
       }
       var numberCharacters=confirm("Do you want to include special characters letters?");
      if(numberCharacters){
        var userPrompt=prompt(" How many special characters would you like?");
        numCharUser=parseInt(userPrompt);
       }
  }
  
  getPasswordOptions()
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);