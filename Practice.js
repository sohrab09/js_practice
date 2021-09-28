// const fruits = ["Banana", "Apple", "Orange", "Pineapple"];
// fruits.join("+");
// console.log(fruits);

// const myBoys = ["rahim", "karim", "samir", "arif"];
// const myGirls = ["samira", "arifa", "karina", "mili"];
// const myAnotherBoys = ["arif", "shamim", "labib", "rashed"];

// myBoys.push("Nayeem");
// myGirls.pop("mili");

// const myChildren = myBoys.concat(myGirls, myAnotherBoys);
// console.log(myChildren);

// const fruits = ["Banana", "Apple", "Orange", "Pineapple", "Jackfruit"];
// const newFruits = fruits.slice(0, 4);

// console.log(newFruits);

const numbers = [40, 1, 4, 65, 345, 65, 33, 42, 40];
numbers.sort(function(a, b) {
    return a - b;
})
console.log(numbers);