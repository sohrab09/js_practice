var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filteredArr = arr.filter(function(value){
    return value % 2 !== 0
})

console.log(filteredArr);

var filteredArr = arr.filter(function(value){
    return value % 2 === 0
})

console.log(filteredArr);

var filteredArr = arr.filter(function(value){
    return value < 5
})

console.log(filteredArr);

var filteredArr = arr.filter(function(value){
    return value <= 5
})

console.log(filteredArr);

var filteredArr = arr.filter(function(value){
    return value > 6
})

console.log(filteredArr);

var filteredArr = arr.filter(function(value){
    return value >= 6
})

console.log(filteredArr);

/* Using Call Back Functions */

function filterArray(arr, cb) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i , arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterArray(arr, function(value){
    return value % 2 === 0;
}));

console.log(filterArray(arr, function(value){
    return value > 6;
}));

/* Find those employee, who knows React */

// const employee = [
//     {
//         firstName = "John",
//         lastName = "Doe",
//         gender = "Male",
//         skills = ["React, Vue, Node, GraphQL, MongoDB"],
//         age = 28
//     },
//     {
//         firstName = "Raj",
//         lastName = "Hasan",
//         gender = "Male",
//         skills = ["Vue, Angular, MySQL, GraphQL, MongoDB"],
//         age = 25
//     },
//     {
//         firstName = "jarif",
//         lastName = "Khan",
//         gender = "Male",
//         skills = ["HTML, CSS, Node, GraphQL, Oracle"],
//         age = 30
//     },
//     {
//         firstName = "Jerin",
//         lastName = "Khan",
//         gender = "Female",
//         skills = ["React, Vue, GraphQL, MongoDB, MySQL"],
//         age = 23
//     },
//     {
//         firstName = "John",
//         lastName = "Hasting",
//         gender = "Male",
//         skills = ["React, Vue, Node, GraphQL, MongoDB"],
//         age = 34
//     },
// ];


let departments = [
    {
        name: 'CSE',
        student: 7000
    },
    {
        name: 'EEE',
        student: 2000
    },
    {
        name: 'CSIT',
        student: 5000
    },
    {
        name: 'ME',
        student: 4500
    },
    {
        name: 'ENGLISH',
        student: 6000
    },
    {
        name: 'BBA',
        student: 8000
    },
    {
        name: 'LAW',
        student: 2500
    }
];

let newDepartments = [];
for (let i = 0; i < departments.length; i++) {
    if (departments[i].student >= 5000)
        newDepartments.push(departments[i]);
}
console.log(newDepartments);