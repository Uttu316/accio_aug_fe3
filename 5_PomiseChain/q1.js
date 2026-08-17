console.log("A");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (2 < 4) {
      resolve(2);
    } else {
      reject("Oops");
    }
  }, 3000);
});

const p2 = p.then((v) => {
  console.log(v);
  return v + 2; // resolve
});

const p3 = p2.then((value) => {
  console.log(value);
});

p3.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
