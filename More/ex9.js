function isItZero(zero) {
  if (2 / zero === Infinity) {
    console.log('this was the wrong zero');
  } if (2 / zero === -Infinity) {
    console.log('this is the correct zero');
  } else {
    console.log('you didnt even put a zero did you?')
  }
}

function correctFunction(zero) {
  return 2 / zero === -Infinity;
}

isItZero(0);
isItZero(-0);
isItZero(7);
console.log(correctFunction(-0));