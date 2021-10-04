function sayHi(n) {
    if (n === 0){
        return
    }
    console.log("I am calling");
    sayHi(n - 1)
}

sayHi(10);

function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n-1)
}

console.log(sum(10));

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5));

var arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1));

var factorial = (n) => {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));