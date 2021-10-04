// Sort Methods

var array = [6, -10, 1, -7, 4, 0, -9, -1, 7, -4, 2, -2, 9, -6, 3, -5, 8, 5, -8, 10, -3];
array.sort();

console.log(array);

// Ascending case

array.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
})

console.log("Ascending: " + array);

// Descending case

array.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
})

console.log("Descending: " + array);

var persons = [
    {
        name: 'John',
        age: 34,
    },
    {
        name: 'Batista',
        age: 23,
    },
    {
        name: 'Rock',
        age: 20,
    },
    {
        name: 'Rose',
        age: 25,
    },
    {
        name: 'Mack',
        age: 30,
    },
];

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
})

console.log(persons);

// Some Method

var array = [6, -10, 1, -7, 4, 0, -9, -1, 7, -4, 2, -2, 9, -6, 3, -5, 8, 5, -8, 10, -3];

var res1 = array.some(function(value){
    return value >= 0
})
console.log(res1);

var res2 = array.some(function(value){
    return value % 2 === 0
})

console.log(res2);

// Every Method

var array = [6, 1, 4, 7, 2, 9, 3, 8, 5, 10, -1];

var res3 = array.every(function (value) {
  return value % 2 === 0;
});

console.log(res3);

var res4 = array.every(function (value) {
  return value >= 0;
});

console.log(res4);
