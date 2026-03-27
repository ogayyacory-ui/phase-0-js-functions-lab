function calculateTax(amount){
    const taxRate = 0.1; 
    return amount * taxRate;
}
console.log(calculateTax(100)); 

function convertToUpperCase(text){    
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));


function findMaximum(num1, num2){

    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximum(10, 27));

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}
console.log(isPalindrome("racecar"));
function calculateDiscountedPrice(price, discount) {
    const discountAmount = price * (discount / 100);
    return price - discountAmount;
}

let price = 100;
let discount = 20;
let discountedPrice = calculateDiscountedPrice(price, discount);
console.log(`The discounted price is: ${discountedPrice}`);

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };