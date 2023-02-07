let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);


// this code logs [1, 4, 3] because you are changing the array when you change array1. array2 is point to the same array as array1.