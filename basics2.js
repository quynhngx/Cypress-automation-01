//loop and conditions in JavaScript

const flag = true

if (flag) {
    console.log('condition satisfied')
} else {
    console.log('condition not satisfied')
}

//if condition will only look for an expression to become true, if that expression is true, then it will go inside the block under if

if (!flag) {
    //the expression we are converting into false, but this variable value will be true
    console.log('condition satisfied')
} else {
    console.log(flag)
    console.log('condition not satisfied')
}

//while loop

//while(true)
//{
//console.log("i am inside loop")
//}

//explain
// if the expression is true, this loop will keep on executing until this condition become false. If this never become false, then this loop will go infinite.
// difference between if condition and while
// if condition is true, it will execute 1 time
// in while loop if condition matches, then it will just keep on running n number of times

let i = 0
while (i > 10) {
    i++ //i++ means i value will increment by one number every time, same thing here i = i + 1
    console.log(i)
}

do {
    i++
} while (i > 10)
console.log(i)

//do while loop, no matter if condition is true or false, one round of loop will definitely run and then only it will check for condition
//do while loop, execute code once, then monitor status, then go with a do while loop

for (let k = 0; k <= 10; k++) {
    console.log(k)
}

//use for loop when you know how many times you have to run this loop

let required = true
while (required) {
    console.log(required)
    required = false
}

//while loop is used to evaluate any kind of expression as a condition

console.log('***********************')

//from 1 to 10 give me common multiple values of 2 and 5

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0 && k % 5 == 0) console.log(k)
}

//&& (double ampersand, for BOTH operator)

//from 1 to 10 give me either the number multiples of 2 or 5, or BOTH

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0 || k % 5 == 0) console.log(k)
}

console.log('****************************')
//from 1 to 100, give me the first three values that commom multiple values of 2 and 5

let n = 0
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k)
        if (n == 3) break
    }
}
