let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // this line logs hi because the value was changed in the bar function
console.log(qux);   // this line logs hello because the reassignment happened inside the function and did not change the value that qux was pointing at.