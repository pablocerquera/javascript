function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

//Variables: foo, qux, result, bar, arg1, arg2
//Primitive: 'Hello', abc, def, ghi, jkl, mno, pqr, null, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 'Victor', 'Antonina', NaN
//Objects:{abc: [1, 2, 3, [4, 5, 6]], def: null, ghi: NaN, jkl: foo, mno: arg1, pqr: arg2,}, 1, 2, 3, [4, 5, 6], [4, 5, 6], bar, qux
//Object Property Names:abc, def, ghi, jkl, mno, pqr, null, 0, 1, 2, 3

