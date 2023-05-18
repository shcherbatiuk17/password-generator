var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter password length (8 - 128):");
  // ask user for password length 
  if (passwordLength < 8) {
    alert("Password too short");
    return;
  } else if (passwordLength > 128) {
    alert("Password too long");
    return;
  }
  // if statement that checks if password length is correct  
  var lowerCaseConf = confirm("Would you like to include lowercase characters?");
  var upperCaseConf = confirm("Would you like to include uppercase characters?");
  var numbersConf = confirm("Would you like to include numbers?");
  var specialCharactersConf = confirm("Would you like to include special characters?");
  //ask user to choose chracters lists
  var characters = "";
  var password = "";

  if (lowerCaseConf) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCaseConf) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbersConf) {
    characters += "0123456789";
  }
  if (specialCharactersConf) {
    characters += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
  }
// checking if confirm statment === true adding lits with characters to the empty characters variable
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
    // charAt() method is used to select a random character from the characters string by generating a random index and adding it to the password variable. 
  }
  return password;
}

