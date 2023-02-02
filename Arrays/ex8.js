let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = strings => {
  return strings.reduce((filteredLengths, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredLengths.push(length);
    }

    return filteredLengths;
  }, []);
}


console.log(oddLengths(arr)); // => [1, 5, 3]