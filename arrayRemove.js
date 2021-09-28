var arr = [1, 2, 3, 4, 5];


// arr.slice(Index No, Delete Count, Value) -> Insert Syntax

arr.splice(2, 0, 3); //Insert

// arr.slice(Index No, How many value want to delete) -> Delete Syntax

arr.splice(2, 1); //Remove

// arr.slice(Index No, How many value, Replace Value) -> Replace Syntax

arr.splice(2, 1, 7); //Replace

console.log(arr)