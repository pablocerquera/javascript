let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1]; // 5
array2.length = 5;

let array3 = []; // 0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; // 3
array4.length = 3;

let array5 = []; // 101
array5[100] = 3;