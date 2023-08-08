// Challenge 03 Arrow Functions

// Convert the given function into an arrow function and store the returned value in a variable and log it to the console.

function mathFunction(a, b) {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
}
console.log(mathFunction(10,20));


/* Solution */
let addition = (x, y) => x + y;
console.log(addition(10, 20)); 

let subtraction = (x, y) => x - y;
console.log(subtraction(10, 20)); 

let multiplication = (x, y) => x * y;
console.log(multiplication(10, 20)); 

let division = (x, y) => x / y;
console.log(division(10, 20)); 
