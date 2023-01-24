function multiply(left, right) {//left and right on lines 1 and 2 are not the same as left and right on lines 10 and 11. the variables in the furction multiply are locally scoped and the others are not.
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

