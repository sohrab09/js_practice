var date = new Date();
console.log("Todays date is: " + date);

var today = date.getDay();
console.log("Case Number: " + today);

// Task: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday; 

switch (today) {
    case 0:
        console.log("today is sunday");
        break;
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
    default:
        console.log("Not a valid day");
}