console.log("A");
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hey");
  }, 3000);
  console.log("B");
});
p.then((v) => {
  console.log(v);
  return v + "B";
})
  .then((v) => {
    console.log(v);
    return v + "C";
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
    throw v + "D";
  })
  .then((v) => {
    console.log(v);
    return v + "E";
  })
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("C");
