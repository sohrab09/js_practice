function sample(a, b, cb) {
    var c = a + b;
    var d = a - b;
    var result = cb(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}

var result = sample(10, 5, sum);
console.log(result);