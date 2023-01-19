{
  let foo = 'bar';  //foo will return a ReferenceError for foo because foo was defined in the scope of a block and logged outside that block.
} 

console.log(foo);