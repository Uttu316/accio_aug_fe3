console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
    if ("A" < "B") {
      resolve("Small");
    } else {
      reject("Big");
    }
    console.log("E");
  }, 3000);

  console.log("D");
});

console.log("F");

p.then((v) => {
  console.log(v);
})
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Done");
  });
console.log("G");
