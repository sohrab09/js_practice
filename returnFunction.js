// function greet(msg) {
//     function greetings(name) {
//         return msg + ', ' + name + '! ';
//     }
//     return greetings
// }

// var gm = greet("Good Morning");

// var msg = gm("Nahid");

// console.log(msg);

function base(b) {
    return function(n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}

var base10 = base(5)
console.log(base10(5));