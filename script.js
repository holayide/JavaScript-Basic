// 1)  Create a function that checks if the input/parameter is an even number. 
// 2) Create a function that prints to the console n1 to n2. 
// where n1 is the first input/parameter and n2 is the second input/parameter 
// e.g 1st input --- 3, 2nd input ---- 6 :Output --- 3,4,5,6
// 3) Create a function that sum the values in-between two numbers. 
// e.g calcFunc(1,3) returns 6. ie. 1+2+3. 


// Question 1

function checkEvenNumber(a) {
    if (a % 2 == 0) {
        console.log ("Yes, it's an even number!");
    } else {
        console.log ("Not an even number");
    }
}

checkEvenNumber(101);

/* alternate method
function checkEvenNumber(a) {
    if (a % 2 == 0) {
        return ("Yes, it's an even number!");
    } else {
        return ("Not an even number");
    }
} 

let result = checkEvenNumber(90);
console.log (result); */


// Question 2

function printRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        console.log (i);  
    }
}

printRange(1, 10);


// Question 3
function sumNumbers(m1, m2) {
    let sum = 0;
    for (let i = m1; i <= m2; i++) {
        sum += i;
    }
    console.log (sum);
}

sumNumbers(1, 3);
