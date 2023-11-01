//JavaScripts Object is collection of properties

//a person object

let person = {
    firstName: 'Tim', //property can be defined in key value pairs. Key is always be string, value can be any data type.
    lastName: 'Joe',
    age: 24,
    fullName: function () {
        console.log(this.firstName + this.lastName) //join the 2 key value
    },
}

//access the lastName of that person
console.log(person.lastName)
console.log(person['lastName']) //access with array notation but put the property inside a single quote

//update the property inside the object
person.firstName = 'Tim Dane'
console.log(person.firstName)

//add new property
person.gender = 'male'
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }

//delete a property
delete person.gender
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe' }

//check if a property exists
console.log('gender' in person)

//print all the properties in an object
for (let key in person) {
    console.log(person[key])
}

console.log(person.fullName())
