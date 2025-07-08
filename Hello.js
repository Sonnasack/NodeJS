// hello.js
// display "Hellow, world" to terminal
console.log("Hello, World!");

// input.js
const readline = require('readline');

// Create an interface to read from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

