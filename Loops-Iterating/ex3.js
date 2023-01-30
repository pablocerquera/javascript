let counter = 0;

while (counter = 1) {  //it is because the counter is assigning 1 to counter. it will never be falsy. I added the '<' operator to fix the infinite loop.
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}