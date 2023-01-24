function getNum(prompt) {
  let rlSync = require('readline-sync');
  let num = Number(rlSync.question(prompt));
  return num;
}
let number1 = getNum('Enter the first number: ');
let number2 = getNum('Enter the second number: ');

let multiply = (number1, number2) => {
  return number1 * number2;
}
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`)