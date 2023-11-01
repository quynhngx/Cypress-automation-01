//block of code can be wrapped together and can be called later to execute the code. It's Function.
//wrap code in a block and give it a nice name => function comes into the picture

//DIFFERENCE BETWEEN VAR, LET AND CONST
//var is accessed in global level but not in the function level (function scope), still be accessed in block level
//var - global level/functional level. If defining inside the block first, then it will replaced the global
//let - global level/block level {}. only access from global.
//const - this can not be reinitialized.

const greet = 'Morning'
// greet = "Night"

if (1 == 1) {
    let greet = 'Afternoon'
}

//1st way
function add(a, b) {
    //text "function" + name of the function + parameters in ()
    var greet = 'Morning'
    return a + b
}

let sum = add(2, 3) //call method here and this method will go and execute the function above.
console.log(sum)
console.log(greet)

//2nd way => called Anonymous function, function does have name. Function expressions.

let sumofIntegers = function (
    c,
    d, //anonymous function can only be assigned to a variable.
) {
    return c + d
}

console.log(sumofIntegers(3, 4))

//3rd way
//if anonymous function, text "Function" AND value in the curly brace can be get rid of.

let sumofNumbers = (c, d) => c + d
console.log(sumofNumbers(5, 6))
