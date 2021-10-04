var array = [1, 2, 3, 4, 5];

// var result = array.find(function(value){
//     return value === 5
// })

// console.log("Value: " + result);

// var result = array.findIndex(function(value){
//     return value === 5
// })

// console.log("Index: " + result);

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            // return array[i];    // Return the value
            return i;           // Return the index
        }
    }
}

var result = myFind(array, function(value){
    return value === 4;
})

// console.log("Value: " + result);
console.log("Index: " + result);