let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (strings) => {
  let lengths = strings.map(letters => letters.length);
  let oddLengths = lengths.filter(number => number % 2 !== 0);
  return oddLengths;
}
console.log(oddLengths(arr));

//console.log(oddLengths(arr)); // => [1, 5, 3]