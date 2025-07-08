// Primitive Types
let name = "Tong";                // String
let age = 25;                     // Number
let isStudent = true;            // Boolean
let address;                     // Undefined
let emptyValue = null;          // Null
let bigNumber = 123456789012345678901n; // BigInt
let uniqueId = Symbol("id");     // Symbol

// Object Types
let student = {
  name: "Tong",
  age: 25,
  major: "Computer Science"
}; // Object
console.log("Age "+student.age+" Years, " +student.name)

let scores = [95, 88, 76];        // Array

console.log(scores[2])

function greet(name) {
  console.log("Hello, " + name);
} // Function
greet("Sonnasack")
