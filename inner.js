// function something(greet, name) {
//     function sayHi() {
//         console.log(greet, name);
//     }
//     sayHi();
// }

// something("Good Morning", "Nahid");

function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(',') [0];
        } else {
            return '';
        }
    }
    var message = greet + " " + getFirstName();
    console.log(message);
}

something("Good Goodbye", "Nahid Hasan");