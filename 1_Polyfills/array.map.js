Array.prototype.map = null; //assumption

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const curr = this;
    let result = [];
    for (let i = 0; i < curr.length; i++) {
      const x = callback(curr[i], i, curr);
      result.push(x);
    }
    return result;
  };
}

const arr = ["A", "B", "C", "D"];

const output = arr.map((item, index, array) => {
  console.log(item, index, array);
  return item + index;
});
console.log(output);
