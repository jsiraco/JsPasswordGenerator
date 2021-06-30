// Assignment Code
let generateBtn = document.querySelector("#generate")
let password = "TestPass";
let passLength = 0;

// Write password to the #password input
let = writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
