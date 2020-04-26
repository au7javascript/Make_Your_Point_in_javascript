// variable : A JavaScript variable is simply a name of storage location
var x = 5;
var y = 6;
var z = x + y;

// Creating a variable in JavaScript is called "declaring" a variable.

var carName;

// A variable declared without a value will have the value undefined.

carName = "Volvo";

var carName = "Volvo";
var carName;

// If you re-declare a JavaScript variable, it will not lose its value.

// .................... <===>..............................................

// DATA TYPES:
// 1:The String Data Type:
var c = ' We\'ll never give up.';    

// 2:  The Number Data Type:
var d = 4.25e-6;

// 3: The Boolean Data Type:
var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping


// 4: The Undefined Data Type:

var a;
var b = "Hello World!";
 
console.log(a) // Output: undefined
console.log(b) // Output: Hello World!

// 5: The Null Data Type:

var b = "Hello World!"
console.log(b); // Output: Hello World!
 
b = null;
console.log(b) // Output: null

// The Object Data Type:

var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "26"};
 

    var car = {
        modal: "BMW X3",
        color: "white",
        doors: 4
    }


//Accessing Object's Properties

var book = {
    "name": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "year": 2000
};

//. notation
console.log(book.name) // "Harry Potter and the Goblet of Fire"

//[] notation
console.log(book['name']) //


//Looping Through Object's Properties
var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

// Iterating over object properties
for(var i in person) {  
    console.log(person[i]); //  name, age and gender
}

// Setting Object's Properties

var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

// Setting a new property
person.country = "United States";
person['state'] = 'Utah'
console.log(person.country); // United States

//Calling Object's Methods

var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        console.log(name);
    }
};

person.displayName(); // Outputs: Peter


// The Array Data Type:
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];

console.log(colors[0]);   // Output: Red
console.log(cities[2]);   // Output: New York

// creating a array
var myArray = [element0, element1, ... elementN]; // creating using []
var myArray = new Array(element0, element1, ... elementN); //creating using constructor

// Array examples
var colors = ["Red", "Green", "Blue"]; 
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var cities = ["London", "Paris", "New York"];
var person = ["John", "Wick", 32];


// Accessing the Elements of an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
fruits[0] // 'Apple'
fruits[fruits.length-1] //'Papaya

// Getting the Length of an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruits.length) // 5

// Looping Through Array Elements
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Iterates over array elements
for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Adding New Elements to an Array
var colors = ["Red", "Green", "Blue"]; 
colors.push("Yellow"); 

//unshift()- add at the beginning of the array
var colors = ["Red", "Green", "Blue"]; 
colors.unshift("Yellow");
 
// Removing Elements from an Array
var colors = ["Red", "Green", "Blue"];
var last = colors.pop(); // removes blue from colors

//shift() - removes first element from the array
var colors = ["Red", "Green", "Blue"];
var first = colors.shift();


// Adding or Removing Elements at Any Position
array.splice(index, howmany, item1, ...itemX)

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
var arr1 = arr.splice(2,2)
console.log(arr);  // [ 1, 2, 5, 6, 7, 8 ]
console.log(arr1); // [ 3, 4 ]

//Extracting a Portion of an Array

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
var arr1 = arr.slice(2,5)
console.log(arr);  // [1, 2, 3, 4, 5, 6, 7, 8]
  
console.log(arr1); //[3, 4, 5]

// Creating a String from an Array
//To do this you can use the join() method.

var colors = ["Red", "Green", "Blue"];
console.log(colors.join()) // Red,Green,Blue

// Merging Two or More Arrays
// The concat() method can be used to merge or combine two or more arrays. 

var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
var animals = pets.concat(wilds); 
console.log(animals) // Cat,Dog,Parrot,Tiger,Wolf,Zebra


// “By Value” and “By Reference” in JavaScript:

//Primitives: string, number, boolean, Trivial (null and undefined). 
// Composite : array , object , functions.

// By Values:

var x = 10;
var y = x;
x = 20;

console.log(x) // 20
console.log(y) // 10

// By Reference Object:

var x = {value : 20};
var y = x;

console.log(x) // { value: 20 } 
console.log(y) //  { value: 20 }


// JavaScript Loops

// while — loops through a block of code as long as the condition specified evaluates to true.

while(condition) {
    // Code to be executed
}

var i = 1;
while(i <= 5) {    
    console.log("The number is " + i);
    i++;
}
// for — loops through a block of code until the counter reaches a specified number.

for(initialization; condition; increment) {
    // Code to be executed
}

for(var i = 1; i <= 5; i++) {
    console.log("The number is " + i );

}

// The if...else if...else Statement

if(condition1) {
    // Code to be executed if condition1 is true
} else if(condition2) {
    // Code to be executed if the condition1 is false and condition2 is true
} else {
    // Code to be executed if both condition1 and condition2 are false
}


var dayOfWeek = 5; // Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
    console.log("Have a nice weekend!");
} else if(dayOfWeek == 0) {
    console.log("Have a nice Sunday!");
} else {
    console.log("Have a nice day!");
}

// Defining and Calling a Function


function functionName() {
    // Code to be executed
}


// Defining function
function sayHello() {
    alert("Hello, welcome to this lock down!");
}
 
// Calling function
sayHello(); // output: Hello, welcome to this lock down!
