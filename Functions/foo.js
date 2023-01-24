let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
//bar returns 1 to the console because the reassignment of bar is in the scope of the function and we logged bar outside the function.