let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

objKeys = objKeys.map(val => {
  return val.toUpperCase();
})



objKeys.sort();
console.log(objKeys);
console.log(obj);