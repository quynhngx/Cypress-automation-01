//Strings and its method

const Person = require('./basics7') //import class into the basics5.js file
let day = 'tuesday '
console.log(day.length) //8

console.log(day.slice(0, 4)) //tues

console.log(day[1]) //u

let splitDay = day.split('s') //"s" will be a breakpoint. SplitDay will be an array because only array can hold multiple values.
console.log(splitDay)
console.log(splitDay[1])
console.log(splitDay[0])

console.log('*******************')

console.log(splitDay[1].length) //include the white space
console.log(splitDay[1].trim().length) //not include the white space because we already trim it

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) //parseInt is the method helping converting string into integer
console.log(diff)
console.log(diff.toString()) //toString() is the method that helps converting integer into string

let subtractofNumbers = (c, d) => c - d
console.log(subtractofNumbers(parseInt(nextDate), parseInt(date))) //I try to use the function of sum here and it works ^^

let newQuote = day + 'is Funday' //this is used to join two strings, concatenate them
console.log(newQuote)

let val = newQuote.indexOf('day')
console.log(val) //4  It means the "day" starts at a fourth index

let val1 = newQuote.indexOf('day', val + 1) //it will start searching from "a" (in "day") and then it will find the next "day".
console.log(val1) //14 the second "day" starts at a fourteenth index

//write a program to check how many times does "day" occur in the string "Tuesday is Funday"
let count = 0
let value = newQuote.indexOf('day') //if it could not find the day, it will return -1

while (value !== -1) {
    count++
    value = newQuote.indexOf('day', value + 1)
}
console.log(count)

let child = new Person('Anh', 'Tran')
let pappa = new Person('Huy', 'Tran')
console.log(child.fullName())
console.log(pappa.fullName())
