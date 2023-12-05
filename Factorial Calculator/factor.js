// Factorial Calculator:
// Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, 
// YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function returnFactorial (num) {
    let sum = 1;
      
    for (let i = 2; i <= num; i++) {
        sum *= i;
    }
    return sum;   
}

let result = returnFactorial (4);
console.log(result);