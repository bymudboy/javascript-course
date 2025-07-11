console.log("Day 03");

// Operator - Symbols + - * / %
// Operands - x+y, x and y are the operands
// Expression - assignment expression: x = 2 / evaluating expression: 3 + 4

// Arithimetic Operators

let a = 12;
let b = 5;

let f_name = "tapas";
let l_name = "adhikary";

console.log(f_name + l_name);

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

count = 5;

console.log(count++); // increment after use
console.log(count);
console.log(++count); // increment before use

// Assignment Operators
console.log("**** Assignment Operators ****");

let x = 10;

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)

console.log(x);

// Comparison Operators
console.log("**** Comparison Operators ****");  
console.log(0 == false);
console.log(3 == '3');
console.log(3 != '3');

console.log(3 === '3'); // strict equality

console.log(null === null);
console.log(undefined === undefined);

// NaN (Not a Number)

let obj1 = {'name': 'tapas'}; // XX0011
let obj2 = {'name': 'tapas'}; // YY0022

console.log(obj1 === obj2); // false, because they are different objects in memory
console.log(obj1 !== obj2); 

// Logical Operators
console.log("**** Logical Operators ****");
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

console.log('Cow' && 'Horse'); // Horse

4 > 5 && 4 === 6

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log('Cow' || 'Horse'); // Cow

console.log(!false);

let a1 = null ?? 1; // 1
let a2 = undefined ?? 2; // 2
const a3 = false ?? "tapaScript"; // false
const a4 = 0 ?? "tapas"; // 0

// Conditional (Ternary) Operator
console.log("**** Conditional (Ternary) Operator ****");    

// comparison ? true : false

let age = 18;
age >= 18 ? console.log("You can vote") : console.log("You cannot vote");

// Grouping Operators
console.log("**** Grouping Operators ****");

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); // 7
console.log((p + q) * r); // 9

// Typeof Operator
console.log("**** Typeof Operator ****");

typeof "tapas"; // string
typeof false; // boolean

let size = 100;
typeof size; // number

const numbers = [1, 2, 3];
typeof numbers; // object

typeof null; // object (this is a known bug in JavaScript)

// Instanceof Operator
console.log("**** Instanceof Operator ****");       

// object instanceof objectType

