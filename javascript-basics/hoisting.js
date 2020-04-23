// What is Hoisting:
// In JavaScript, all variable and function declarations are moved or hoisted to the top of 
// their current scope


// Function Hoisting:

// Calling function before declaration
sayHello(); // Outputs: Hello, I'm hoisted!

function sayHello() {
    console.log("Hello, I'm hoisted!");
}

// Variable Hoisting

str = "Hello World!";
console.log(str); // Outputs: Hello World!
var str;


console.log(str); // Outputs: undefined
var str;
str = "Hello World!";