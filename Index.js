// * 1st Question

// Task: First double the array value, then sum all the double value.

const array = [1, 2, 3, 4];

var doubleNumbers = array.map((n) => n * 2);
console.log(doubleNumbers);
var sumAllNumbers = doubleNumbers.reduce(function (a, b) {
    return a + b;
});
console.log(sumAllNumbers);

// Output will 20

// * 2nd Question

// Task: complete the function to return the number of vowels in the input string.

const vowels = ["a", "e", "i", "o", "u"];

const getVowelsCount = (str) => {
    var vowelCount = 0;

    var string = str.toString();
    for (var i = 0; i <= str.length - 1; i++) {
        if (
            string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u"
        ) {
            vowelCount += 1;
        }
    }
    return vowelCount;
};

console.log(getVowelsCount("Hello World!"));

// * 3rd Question

// Task: What will be the output of this code.

const a = {
    key1: "value1",
    key2: "value2",
};
const b = a;
const c = {...a};

console.log(a === b); /* true; */
console.log(a === c); /* false; */
console.log(b === c); /* false; */

// * 4th Question

// SUM of all even numbers 

var sum = 0;
for( var i=0; i<=100; i++ ){
	if ( i % 2 === 0 ) {
		sum +=i
	}
}
console.log("Total = " + sum)

// * 5th Question

// SUM of all odd numbers 

var sum = 0;
for( var i=0; i<=100; i++ ){
	if ( i % 2 !== 0 ) {
		sum +=i
	}
}
console.log("Total = " + sum)

// * 6th Question

// Show all odd number 

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log("Here is all odd numbers: " + i);
    }
}

// * 7th Question

// Show all even number 

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Here is all even numbers: " + i);
    }
}

// * 8th Question

/*
    Task1:
    *
    * *
    * * *
    * * * *
    * * * * *
*/

var n = 5;
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += "* "
    }
    console.log(result)
}

// * 9th Question

/* 
    Task2:
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

var n = 5;
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}

// * 10th Question

/*
    Task3:
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
*/

var n = 5;
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= n; j++) {
        result += j + ' '
    }
    console.log(result)
}

// * 11th Question

/*
    Task4:
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
*/

var n = 5;
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= n; j++) {
        result += "* "
    }
    console.log(result)
}

/*
    Task:
            * *
          * * * *
        * * * * * *
      * * * * * * * *
    * * * * * * * * * *
*/

for (let i = 1; i <= 5; i++) {
    var space = ' '
    var star = ''
    for (var j = 1; j <= (5-i) * 2; j++){
        space += ' '
    }
    for (let k = 1; k <= i; k++) {
        star += '* '
    }
    process.stdout.write(space)
    process.stdout.write(star)
    console.log(star)
}