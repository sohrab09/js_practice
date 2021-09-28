var arr = [1, 2, 3, 4, 5];

var sqrArr = arr.map(function(value, index, arr) {
    return value * value;
})

console.log(sqrArr);

var triple = arr.map((n) => n*10);
console.log(triple);