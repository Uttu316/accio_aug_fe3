console.log("A");

function abc(a, b, fun) {
  console.log("B");

  const x = 2;
  const y = a + b;

  const o = fun(x, y) + fun(x + y, a);
  return o;
}

function mul(p, q) {
  console.log("C");
  return p * q;
}
console.log("D");

let r = abc(3, 2, mul);
console.log(r);
