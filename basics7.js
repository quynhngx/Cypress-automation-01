//CLASSES AND ITS OBJECTS
//only exists in ES6 engine

//export to anyone so they can see the Class
module.exports = class Person {
    //class Person is an entity which holds all the details
    age = 25
    //location = "canada"
    get location() {
        //use get before the method name, then that is treated as a property
        return 'canada'
    }
    //constructor is method which executes by default when you create object of the class
    constructor(
        firstName,
        lastName, //firstName & lastName are called instance variables
    ) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //method
    fullName() {
        console.log(this.firstName + this.lastName)
    }
}

//If you want to access the property of any class, you have to create object of that class
// let person1 = new Person("Tim", "Joseph") //sending firstName and lastName into constructor
// let person2 = new Person("Quynh", "Nguyen")
// console.log(person1.age)
// console.log(person1.location)
// console.log(person1.fullName())
// console.log(person2.fullName())
