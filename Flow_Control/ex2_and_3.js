function evenOrOdd(num) {
  if (Number.isInteger(num) === true) {
    if (num % 2 === 0) {
    console.log('even');
    } else {
    console.log('odd');
    }
  } else {
    console.log('You must input an integer for the program to function.')
  }
}

evenOrOdd(6)
evenOrOdd(8)
evenOrOdd(1)
evenOrOdd(true)