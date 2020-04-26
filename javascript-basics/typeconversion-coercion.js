// TypeConversation and Coercion


// Explicit 
var a = "42";
var b = Number( a );
console.log(a); // "42"
console.log(b); // 42,the number!


// Implicit 

var a = "42";
var b = a * 1; // "42" implicitly coerced to 42 here
console.log(a); // "42"
console.log(b); // 42,the number!

