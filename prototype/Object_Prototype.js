let student = function(name, age){
    this.name = name
    this.age = age
  }

  //  declearing prototype
student.prototype.subject = "Software Engineering"  

//  creating instances of the class Student
let Akash = new student("Akash Dutta", 27)
let Aniket = new student("aniket Dutta", 24)

console.log(Akash)
console.log(Aniket)


// Output

/*student {name: "Akash Dutta", age: 27}
   name: "Akash Dutta"
   age: 27
  __proto__:
      subject: "Software Engineering"
      constructor: ƒ (name, age)
      __proto__: Object
 
student {name: "aniket Dutta", age: 24}
   name: "aniket Dutta"
   age: 24
  __proto__:
      subject: "Software Engineering"
      constructor: ƒ (name, age)
      __proto__: Object