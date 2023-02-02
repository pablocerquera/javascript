let sumOfSquares = num => {
  return num.reduce((acc,  ele) => {
    return acc + ele * ele}, 0);
}




let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83