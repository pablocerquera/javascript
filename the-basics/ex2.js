let num = 4936;
let n1 = num % 10;
num = (num - n1) / 10;
let n2 = num % 10;
num = (num - n2) / 10;
let n3 = num % 10;
num = (num - n3) /10;
let n4 = num % 10;

let arr = [n1, n2, n3, n4];

console.log(arr);
