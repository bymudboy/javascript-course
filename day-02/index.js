// variables: are used to store data in JavaScript

// - 'var' : function scoped, can be redeclared (not recommmended)
// - 'let' : block scoped, can be reassigned 
// - 'const' : block scoped, cannot be reassigned

let address = "Brazil";

console.log(address); 

address = "France"; 

console.log(address); 

/* 

- ** Primitive Data Types: **
    - `String` - Text values (`"Hello"`)
    - `Number` - Numeric values (`25`, `3.14`)
    - `Boolean` - True/False (`true`, `false`)      
    - `Undefined` - A variable declared but not assigned a value (`let x;`)
    - `Null` - Represents "nothing" (`let y = null;`)
    - `BigInt` - Large numbers int (`BigInt(1234567890123456789012345678901234567890)`)
    - `Symbol` - Unique identifiers (`Symbol("id")`)

- ** Non-Primitive (Reference) Data Types: **
    - `Object` - Collection of key-value pairs (`{ name: "Alice", age: 30 }`)
    - `Array` - Ordered list of values (`[1, 2, 3]`)
    - `Function` - Code that can be executed (`function greet() { console.log("Hello!"); }`)
*/

let student = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },   
    age: [2, 3, 4],
    isEnrolled: true,
};
console.log(student.name);