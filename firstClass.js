function add(a, b) {
    return a + b;
}

// A function can be stored in a variable
var sum = add;
console.log(sum(4, 5));

// A function can be stored in a array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](55, 45));

// A function can be stored in a object
var obj = {
    sum: add
};
console.log(obj);
console.log(obj.sum(10, 20));

// We can create a function as we need

setTimeout(function() {
    console.log("This is a function");
}, 500);