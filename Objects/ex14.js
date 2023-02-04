function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


// variables: greeting, name, howdy, foo, hello, xyzzy
// object property: a,b,c,d,0,1,2,3,4,5
// primitive: a, b, c, d, 1, 2, 3, 4, 5, ' ', 0, 1, 2, 'Hi', 'Grace'
// objects: { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}