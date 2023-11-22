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
  
  let specCharUser=0;
  let capCharUser=0;
  let lowCharUser=0;
  let numCharUser=0;
  let passwordArray=[];
  let password;
  
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var lenght= parseInt(prompt("Chosee the lenght of your Password: type a number between 8 and 128"));
      if(lenght < 8 || lenght > 128){
        alert("Chose a number between 8 and 128");
    
      }
  
      var hasCapital=confirm("Do you want to include capital letters?");
      if(hasCapital){
        capCharUser=parseInt(prompt(" How many capital letters would you like?"));
       
      }
      var hasLowercase=confirm("Do you want to include lowercase letters?");
      if(hasLowercase){
        lowCharUser=parseInt(prompt(" How many lowercase letters would you like?"));
       }

      var specialCharacters=confirm("Do you want to include special characters letters?");
      if(specialCharacters){
        specCharUser=parseInt(prompt(" How many special characters would you like?"));
       }
       
       var numberCharacters=confirm("Do you want to include special characters letters?");
      if(numberCharacters){
        numCharUser=parseInt(prompt(" How many special characters would you like?"));
       }
  }
  
  getPasswordOptions()

  
  // Function for getting a random element from an array
  function getRandom(arr) {
    const random = (Math.floor(Math.random)*arr.lenght);
    const char = arr[random];
    return char;
  }
  
  // Function to generate password with user input
  function generatePassword() {
   for(i=0; i<specCharUser; i++){
    passwordArray.push(getRandom(specialCharacters));
   }

   for(i=0; i<numCharUser; i++){
    passwordArray.push(getRandom(numericCharacters));
   }

   for(i=0; i<lowCharUser; i++){
    passwordArray.push(getRandom(lowerCasedCharacters));
   }

   for(i=0; i<capCharUser; i++){
    passwordArray.push(getRandom(upperCasedCharacters));
   }

   passwordArray.sort(() => Math.random() - 0.5);
   password = passwordArray.join("");

   return password;

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