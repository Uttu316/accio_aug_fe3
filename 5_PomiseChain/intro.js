const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
});

p.then((v) => {
  console.log(v);
  return "Hello"; // resolved value
})
  .then((v) => {
    console.log(v);
    throw "Bye"; // reject the new promise with reason
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
