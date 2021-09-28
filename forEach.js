// const arr = [1, 2, 3, 4];

// var double = arr.map((n) => n*2);
// console.log(double);

// /*

// var sum = 0;
// double.forEach(function(double){
//     sum += double
// }) 

// */

// var sum = double.reduce(function(a, b){
//     return a + b;
// })
// console.log(sum);

var arr = [1, 2, 3, 4, 5];

var double = arr.map((n) => n*2);
console.log(double);

var sum = 0;
double.forEach(function(double){
    sum+=double;
})

console.log(sum);