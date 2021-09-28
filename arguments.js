// function sub(a, b) {
//     result = a - b;
//     console.log(result);
// }

// sub(60, 30);
// sub(90, 30);
// sub(240, 30);
// sub(640, 30);

var arr1 = [1, 2, 3, 4];
var arr2 = [4, 5, 6, 7];
var arr3 = [7, 8, 9, 10];

function sumAll(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum);
}

sumAll(arr1 + "," + arr2 + "," + arr3);