console.log("Day 04: JavaScript Operators");

let catchingBus = true;

if (catchingBus) {
    console.log("You'll reach the bus on time!");
} else {
    console.log("You'll miss the bus!");
}

let age = 18;

if (age >= 18) {
    console.log("You CAN vote!");
} else {
    console.log("You CAN'T vote yet.");
}

// grading system

let score = 90;

if (score >= 90) {
    console.log("You got an A!");
} if (score >= 80) {
    console.log("You got a B!");
} if (score >= 70) {
    console.log("You got a C!");
} if (score < 70) {
    console.log("You FAIL!");
}

// difference between the use of if and else if

let x = 0;

if (x === 0) {
    console.log("0");
}
if (x >= 0) {
    console.log("greater than 0!");
}
if (x <= 0) {
    console.log("less than 0!");
} // the three ifs will be executed independently
// withe else if, only the first true condition will be executed

const condition = true;
const innerCondition = true;

if (condition) {
    console.log("inner if");
    if (innerCondition) {
        console.log("inside inner if");
    } else {
        console.log("inner else");
    }
} else {
    console.log("outer else");
}


// switch cases

let position = 4;

switch (position) {
    case 1:
        console.log("Positon 1");
        break;
    case 2:
        console.log("Position 2");
        break;
    case 3:
        console.log("Position 3");
        break;
    case 4:
        console.log("Position 4");
        break;
    default:
        console.log("Position not found");
}

let day = 0;

switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("INVALID DAY");
}

const city = "Chicago";

switch (city) {
    case "São Paulo":
    case "Rio de Janeiro":
    case "Goiânia":
    case "Brasília":
        console.log("Brazilian city");
        break;
    case "New York":
    case "Los Angeles": 
    case "Chicago":
    case "Houston":
        default:
        console.log("American city");
}