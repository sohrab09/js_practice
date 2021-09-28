// var arr = [1, 2, 3, 4, 5];

// arr.reverse();
// console.log(arr);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var ln = array.length - 1;

// for (let i = ln; i >= 0; i--) {
//     console.log(array[i]);
// }

// var number = [1,2,3,4,5,6]
// for(var i = number.length - 1; i >= 0; i--){
//   console.log(number[i])
// }

// var array = Array()
// var arr = [1, 2, 3, 4, 5]
// for(var i = arr.length -1; i >= 0; i--){
// array.push(arr[i])
// }
// console.log(array)

var arr = [1, 2, 3, 4, 5];

for (let i = 0; i < (arr.length / 2); i++) {
     var temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 - i] = temp;
}
console.log(arr)