Array.prototype.forEach = null; //assumption

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    const curr = this;
    for (let i = 0; i < curr.length; i++) {
      callback(curr[i], i, curr);
    }
  };
}

const arr = ["A", "B", "C", "D"];

arr.forEach((item, index, array) => {
  console.log(item, index, array);
});
