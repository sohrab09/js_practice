// var a = 10;
// var b = 20;

// if (a > b) {
//     console.log("A is greater than B")
// } else {
//     console.log("B is greater than A")
// }

// var n = 4;

// if (n % 2 === 0) {
//     console.log(n + " is even number")
// } else {
//     console.log(n + " is odd number")
// }


// TASK: find the odd / even numbers from the array 

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((num) => num % 2 === 0 && console.log("This is odd numbers: " + num));
array.forEach((num) => num % 2 !== 0 && console.log("This is even numbers: " +num));