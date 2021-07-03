// Assignment Code
//Creating variables and accessing pieces of the HTML
let generateBtn = document.querySelector("#generate");
let passLength = 0;

//Creating variables for the 4 operators the password can generate by
const upperCase = document.getElementById("lowerCase");
const lowerCase = document.getElementById("upperCase");
const number = document.getElementById("num");
const specialChar = document.getElementById("specialChar");
const resultsArea = document.getElementById("password");

//Accesses the slider in the html
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

//Makes the slider display its current value on the HTML page
slider.oninput = function () {
  output.innerHTML = this.value;
}

//Creates an even that says when on click of the generate button, we do several things 
generateBtn.addEventListener("click", () => {
  //Here we check to see which of the check boxes are checked, and creates variables for each of those operators
  const length = +myRange.value;
  const hasUpper = upperCase.checked;
  const hasLower = lowerCase.checked;
  const hasNum = number.checked;
  const hasSpecialChar = specialChar.checked;

  //Sets the inner text area of the password to the generate password function taking each of our operators as a value
  resultsArea.innerText = generatePassword(length, hasUpper, hasLower, hasNum, hasSpecialChar);
});

//sets up the generate password function
function generatePassword(length, upper, lower, number, specialChar) {
  //Creates an empty string for the password that we will change later
  let generatedPassword = "";

  //Determines the amount of operators we have selected
  const typeAmount = upper + lower + number  + specialChar;

  //Creates an array of the the operators we have selected
  //Uses the {} brackets to determine if they're are checked(true/fale) then filters out the false operators
  const typesArray = [
    { upper },
    { lower },
    { specialChar },
    { number }].filter
    (
      item => Object.values(item)[0]
    );

    //If no operators are selected, then we return an empty string
  if (typeAmount === 0) {
    return "";
  }

  //Loops through the generate function for each operator and generates a random operator up to the length selected by the slider length variable
  for (let i = 0; i < length; i += typeAmount) {
    typesArray.forEach(type => {
      //gives us the key (true/false) for each type operator selected
      const myFunc = Object.keys(type)[0];
      
      //appends onto the empty generated password we initialized earlier 
      generatedPassword += randoms[myFunc]();
    });
  }

  //Created a final password variable equal to the generated password, then returns it so it can be used to print into the text area of the HTML element
  const finalPassword = generatedPassword;
  return finalPassword;
}

//Generates a random uppercase letter by parsing a string containing all of the letters
let randomUpper = () => {
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return upper[Math.floor(Math.random() * upper.length)]
}

//Generates a random lowercase letter by parsing a string containing all of the letters
let randomLower = () => {
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  return lower[Math.floor(Math.random() * lower.length)]
}

//Generates a random number by parsing a string containing all of the numbers
let randomNum = () => {
  const num = "0123456789";
  return num[Math.floor(Math.random() * num.length)]
}

//Does the same for the symbols too
let randomSymbol = () => {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)]
}

//sets up my variables in an array after they are generated
const randoms = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  specialChar: randomSymbol,
};

//executes the clipFun initialized in the HTML to copy the text value to the clipboard
function clipFunc() {
  let copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
  alert("Success!");
}

