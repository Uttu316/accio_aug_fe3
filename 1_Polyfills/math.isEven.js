function isEven(value) {
  return value % 2 === 0;
}

Math.isEven = isEven;

const ans = Math.isEven(5);
console.log(ans);
