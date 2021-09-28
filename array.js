var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
var arrayLength = 0;

while (true) {
    if (array[i++] == undefined || null) {
        break;
    } else {
        arrayLength++;
    }
}

console.log(arrayLength);