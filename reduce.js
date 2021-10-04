var arr = [1, 2, 3, 4, 5];


var sum = arr.reduce(function(prev, current){
    return prev + current;
})

console.log(sum);

var max = arr.reduce(function(prev, current){
    return Math.max(prev, current);
})

console.log(max);

function myReduce(accumulator, callback, array) {
    for (let i = 0; i < array.length; i++) {
        accumulator = callback (accumulator, array[i]);
    }
    return accumulator;
}

var sum = arr.reduce(function(prev, current){
    return prev + current;
}, 20)

var max = arr.reduce(function(prev, current){
    return Math.max(prev, current);
}, 0)

var min = arr.reduce(function(prev, current){
    return Math.min(prev, current)
}, arr[0])

console.log(sum, max, min, minus);