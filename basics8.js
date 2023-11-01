//Inheritance
//one class can inherit/acquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class)
//The class whose properties are inherited is known as superclass (parent class)
const Person = require('./basics7')
class Pet extends Person {
    get location() {
        return 'Danang'
    }
    constructor(firstName, lastName) {
        //call the parent class constructor. Mandatory step.
        super(firstName, lastName)
    }
}

let dog = new Pet('Shina', 'Tran')
console.log(dog.fullName())
console.log(dog.location)
