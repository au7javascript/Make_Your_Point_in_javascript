// Call, bind, apply

let language = ["JavaScript",  "Python", "Ruby"]

let person = {
  name : "Akash",
  age : 27
}

let callName = function(lang1, lang2, lang3){
  console.log("My name is " + this.name + " and I know " + lang1 +',' + lang2 + ',' + lang3)
}

// for .call -- immediately invoke the function and takes individual parameters
callName.call(person, language[0], language[1], language[2])

// for .apply -- immediately invoke the function and takes an array as a parameters
callName.apply(person, language)

// for .bind -- immediately invoke the function but with making a new function
var newFunction = callName.bind(person, language[0], language[1], language[2])
newFunction()


