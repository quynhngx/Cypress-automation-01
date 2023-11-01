console.log('Hello World')

//these are comments
/*
Comments are coming here
comments
comments
*/

let a = 4
console.log(a)
typeof a
console.log(typeof a)

let b = 123.4
console.log(typeof b)

let c = 123.5
console.log(typeof c)

let d = 'Potato'
console.log(typeof d)

let required = true
console.log(typeof required)

//null and undefined

//let c = a + b (it did not work because we cannot redeclare variable with let keyword but possible with var)
d = a + b
console.log(d)

console.log(required)
console.log(!required)

d = a - b //reassigning is allowed with let
console.log(d)

var d = a * b //this is also allowed
console.log(d)

var d = a / b
console.log(d)
