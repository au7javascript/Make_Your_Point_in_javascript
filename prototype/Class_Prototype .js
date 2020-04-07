class Student {
    constructor(name,age){
      this.name = name
      this.age = age
    }
  }
  
//   declearing prototype
  Student.prototype.subject = "Software Engineering" 
  
//   creating instances of the class Student
  let Akash = new Student("Akash Dutta", 27)
  let Aniket= new Student("Aniket Dutta", 24)
  
  console.log(Akash)
  console.log(Aniket)
  

//   Output

/*Student {name: "Akash Dutta", age: 27}
   name: "Akash Dutta"
   age: 27
  __proto__:
     subject: "Software Engineering"
     constructor: class Student
     __proto__: Object

Student {name: "Aniket Dutta", age: 24}
   name: "Aniket Dutta"
   age: 24
  __proto__:
     subject: "Software Engineering"
     constructor: class Student
     __proto__: Object