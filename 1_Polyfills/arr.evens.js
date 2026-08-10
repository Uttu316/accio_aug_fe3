// write a polyfill of evens in array
// this function should return even numbers from an array

Array.prototype.evens = function () {
  const arr = this;
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
};

let arr = [2, 5, 4, 7, 6, 8, 12, 34, 54, 65, 76, 87, 98];
const ev = arr.evens();
console.log(ev); // [2,4,6,8..]
