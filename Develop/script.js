// Assignment Code
let generateBtn = document.querySelector("#generate")
let password = "TestPass";
let passLength = 0;

const upperCase = document.getElementById("lowerCase");
const lowerCase = document.getElementById("upperCase");
const number = document.getElementById("num");
const specialChar = document.getElementById("specialChar");


let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function () {
  output.innerHTML = this.value;
}

generateBtn.addEventListener("click", () => {
  const length = +myRange.value;
  const hasUpper = upperCase.checked;
  const hasLower = lowerCase.checked;
  const hasNum = number.checked;
  const hasSpecialChar = specialChar.checked;
  
  console.log(length, hasLower, hasNum, hasUpper, hasSpecialChar);
  password = generatePassword(length, hasLower, hasNum, hasUpper, hasSpecialChar);
});

function generatePassword(length, lower, number, upper, specialChar) {
  let generatedPassword = "";
  
  const typeAmount = lower + number + upper + specialChar;
  
  console.log(typeAmount);
  
  const typesArray = [
    { upper },
    { lower },
    { specialChar },
    { number }].filter
    (
      item => Object.values(item)[0]
      );
      
      console.log(typesArray);
      
      // if (typesAmount === 0) {
      //   return "";
      // }
      
      // for(let i = 0; i < length.length; i++) {
        
      // }
    }
    
    let randomUpper = () => {
      const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
      return upper[Math.floor(Math.random() * upper.length)]
    }
    
    let randomLower = () => {
      const lower = "qwertyuiopasdfghjklzxcvbnm";
      return lower[Math.floor(Math.random() * lower.length)]
    }
    
    let randomNum = () => {
      const num = "0123456789";
      return num[Math.floor(Math.random() * num.length)]
    }
    
    let randomSymbol = () => {
      const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      return symbols[Math.floor(Math.random() * symbols.length)]
    }

    const randoms = {
        lower: randomLower,
        upper: randomUpper,
        num: randomNum,
        symbol: randomSymbol,
    };
    
    let writePassword = () => {
      const password = randoms.join();
      console.log(password);
      return password;
    }
    
    // Write password to the #password input
    let = writePassword = () => {
      let password = generatePassword();
      let passwordText = document.querySelector("#password");
      
      passwordText.value = password;
      
    }
    
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    