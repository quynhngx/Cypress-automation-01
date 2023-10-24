// EXERCISE 01: 
// Add elements
// Create an array with all odd numbers that are smaller than 10. => DONE
// Show the array with the alert command.
// Show how many elements the array contains. => DONE
// Add 2, 4, 6, 8 to the end of the array and show it again. => DONE
// Insert the value 20 on the 20th array element and show the array again. => DONE

var x = [1,3,5,7,9]
console.log(x)
console.log(x.length)

x.push(2,4,6,8)
console.log(x)

x[19] = 20
console.log(x)




// EXERCISE 02:
// Remove elements
// Create an array with all numbers from 1 to 6.
// Show the array with the alert command.
// Delete the first and last element and show the resulting array. => DONE


var y = [1,2,3,4,5,6]
y.pop() //remove the first element of the array
console.log(y)

y.shift() //remove the first element of the array
console.log(y)



// EXERCISE 03:
// Combine elements
// Create an empty array.
// Add 0, 1, 2 to the array with the push method and show the array.
// Create the string "0 + 1 + 2" out of the array using the join method and show the string.

z = []
z.push(0,1,2)
console.log(z)
const separator = "+";
z = z.join(separator)
console.log({z})



// EXERCISE 04:
// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


const array = "w3resource"
const result1 = Array.isArray(array)

if (result1)
{
    console.log(`${array} is an array`)
}
else 
{
    console.log(`${array} is not an array`)
}


const array1 = [1, 2, 4, 0]
const result2 = Array.isArray(array1)

if (result2)
{
    console.log(`[${array1}] is an array`)
}
else 
{
    console.log(`[${array1}] is not an array`)
}



console.log("---------------------------------")
const abc = [1,2,3,4,5,6,7,8,9]
const subabc = abc.slice(1,4)
console.log(`subabc:[${subabc}]`)


const total = abc.reduce((sum,abc)=>sum+abc,0)
console.log(total)

const multiply = abc.reduce((multi,abc)=>multi*abc,1)
console.log(multiply)
