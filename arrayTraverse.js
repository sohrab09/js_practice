/* Task:  A way to find something new from a single array using multiple 
          conditions and logic. */

var array = [1, 2, 3, 4];

var sum = 0;

for (let i = 0; i < array.length; i++) {

    array[i] = array[i] * 2;                        //Double the array value

    sum += array[i];                                //SUM the array value

    if (array[i] % 2 === 0) {                       //Check the EVEN numbers

        sum += array[i];                            //SUM all EVEN numbers

        console.log("Even:" + array[i]);
    }

    if (array[i] % 2 !== 0) {                       //Check the ODD numbers

        sum += array[i];                            //SUM all ODD numbers

        console.log("Odd:" + array[i]);
    }
}

console.log("Total:" + sum);

// You can check each condition and logic separately through the console.log