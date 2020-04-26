//  Let Const and Var

// ES6 introduces the new let keyword for declaring variables.

// Blocked scope
// ES6 syntax
for(let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined

// function scoped
// ES5 syntax
for(var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // 5


// Const:Variables defined with const behave like let variables, 
//except they cannot be reassigned.

const PI = 3.14159265359;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error