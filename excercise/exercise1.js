/**
Exercise 1: Variable Manipulation

Problem Statement:
Write a function variableManipulation() that takes two variables, a and b, and swaps their values.

example:
let a = 5;
let b = 10;
variableManipulation(a, b);

console.log(a); // Output: 10
console.log(b); // Output: 5
 */

function variableManipulation(a, b) {
  let c = a;
  a = b;
  b = c;

  return [a, b];
}

module.exports = variableManipulation;
