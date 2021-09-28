var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var find = 5;

var isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log("Find in position no: " + i, "Find the value no: " + find);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log("Did not find anything")
}