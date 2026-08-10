if (!Array.prototype.includes) {
  Array.prototype.includes = function (target) {
    let curr = this;

    for (let i = 0; i < curr.length; i++) {
      if (curr[i] === target) {
        return true;
      }
    }
    return false;
  };
}

let arr1 = ["A", "B", "C", "D"];

const isPresent = arr1.myincludes("C");
console.log(isPresent);

let arr2 = ["X", "Y", "Z", "P"];

arr2.includes("H");
