//Arrays and its methods
//Arrays = set of values

//Create an array (3 ways)
var marks = Array(6)
var marks = new Array(10, 20, 30, 40, 50, 60)
var marks = [10, 20, 30, 40, 50, 60]
var submarks = marks.slice(2, 5) //index in (), if you need until fourth point, you have to give 5
console.log(submarks) //result: [30, 40, 50]

//Access the element presents in the array
//Index count always starts with a zero
console.log(marks[2]) //access the third element in the array, index 2, it is "30"

//change number in the array
marks[3] = 13 //marks[index] = new number
console.log(marks) //result: [10,20,30,13,50,60]

//know the length of the array
console.log(marks.length) //length=6

//add one more element at the end of the array
marks.push(65)
console.log(marks) //(10,20,30,40,50,60,65)

//delete an element at the end
marks.pop()
console.log(marks) //(10,20,30,40,50,60)

//add an element in the beginning
marks.unshift(12)
console.log(marks) //(12,10,20,30,40,50,60)

console.log('**********************************************')

//delete an element in the beginning of an array
var y = [1, 2, 3, 4, 5, 6]
y.shift()
console.log(y)

//add an element in the middle of an array?

//access the index of a value in the array
console.log(marks.indexOf(50)) //index=5

//validate whether an element presenting in the array or not
console.log(marks.includes(120))

//create sub array from main array
var marks = [10, 20, 30, 40, 50, 60]
submarks = marks.slice(2, 5) //if you need until fourth point, you have to give 5

//print all the elements in the array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

//sum all the elements of the array //IMPORTANT
var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

//REDUCE METHOD
marks.reduce((sum, marks) => sum + marks, 0) //this reduce method can be used to perform operation on all the elements of your array

marks.reduce((sum, marks) => sum + marks, 0)
//2 arguments: sum & marks
//sum is accumulator on every iteration and starting from 0
//marks is individual digit that you gets from the array for each iteration
let total = marks.reduce((sum, marks) => sum + marks, 0)
console.log(total)

console.log('----------------------------------')
let multiply = marks.reduce((multi, abc) => multi * abc, 1)
console.log(multiply)

//FILTER METHOD
scores = [12, 13, 14, 16]
//create new array with even numbers of scores array [12,14,16]
//first, you need to create an empty array

evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(`evenScores:[${evenScores}]`)

scores.filter((score) => score % 2 == 0)
//filter is used when you want filter your array based on some conditions like even/odd numbers
//score is the new variable that stores value of the array on every iteration
//behind the "=>" is the condition, if the variable matches this condition, it will push to the score.
const newFilterevenScore = scores.filter((score) => score % 2 == 0)
console.log(`newFilterevenScore: [${newFilterevenScore}]`)

//MAP METHOD
//create new array with even numbers of scores array [12,14,16] and multiply each value with 3

const ScoresMultiply3 = []
for (let i = 0; i < evenScores.length; i++) {
    {
        ScoresMultiply3.push(evenScores[i] * 3)
    }
}
console.log(`ScoresMultiply3:[${ScoresMultiply3}]`)

let newMappedArray = newFilterevenScore.map((score) => score * 3) //using Map method
console.log(`newMappedArray:[${newMappedArray}]`)

let sumnewMappedArray = newMappedArray.reduce((sum, mark) => sum + mark, 0)
console.log(`sumnewMappedArray: ${sumnewMappedArray}`)

scores01 = [12, 13, 14, 15, 16, 17]
//create new array with odd numbers of scores array [12,13,14,15,16,17] and multiply each value with 3
//after all, sum up all the items in new array

let NewScoresArray = scores01
    .filter((scores) => scores % 2 == 1)
    .map((scores) => scores * 3)
    .reduce((sum, scores) => sum + scores, 0) //write 1 line of all the motheds
console.log(`NewScoresArray: ${NewScoresArray}`)

//SORT strings array & numbers array

let fruits = ['orange', 'apple', 'banana', 'pear', 'grape']
console.log('fruits', fruits)
console.log(`fruits: ${fruits}`) //ask Huy
console.log(fruits.sort()) //sort the strings array into alphabet order. ONLY SORT WITH STRINGS, ascending order
console.log(fruits.reverse()) //descending order

scores02 = [12, 003, 19, 16, 14]
//sort with custom logic, normally sort above just for sorting strings
let SortNumber1 = scores02.sort((a, b) => a - b)
//the minimum difference, whatever it find that will push to the beginning // ascending sorting
console.log(SortNumber1)

let SortNumber2 = scores02.sort((a, b) => b - a) //descending sorting
console.log(SortNumber2)
