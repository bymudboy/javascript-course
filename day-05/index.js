console.log("Day 05");

// for loop
// "A for loop is best when we know exactly how many times we need to run a block of code."
// for (initialization; condition; update) 


for (let ball = 1; ball <= 1; ball++) {
    console.log("Ball number: " + ball);
}

// Addition of even numbers between 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        //console.log("i", i);
        // sum = sum + i;
        sum += i;
    }
}

console.log("Sum of even numbers between 1 and 100 is: " + sum);

let language = "BYMUDBOY";
for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i));
}

// nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("row: " + i + ", col: " + j);
    }
}

// break and continue
for (let i = 1; i <= 5; i++) {
    console.log("Current number: " + i);
    if (i === 3) {
        break;
    }
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("number: " + i);
}

// multiples counters for single loop

for(let i =1, j = 10; i <= 10 && j <= 10; i++, j--) {
    console.log(i, j);
}

// later try to do the pyramid with "*"

for (i = 1; i <= 5; i++) {
    let row = "";
        for (j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
}

// while loop
    // "A while loop runs as long as a given condition is true. It's best when we don't know in advance how many interations we needed."
        // while (condition) { code };

let counter = 1;
while (counter <= 5) {
    console.log("Counter is: " + counter);
    counter++;
}

// do-while loop
    // "A do-while loop ensures that the code executes at least once before checking the condition."
        // do { code } while (condition);

let num = 1;
do {
    console.log("Number is: " + num);
    num++;
} while (num <= 2); 

// infinite loop
    // crash - when the condition is always true
        // for() { code } and while() { code } without a proper condition