const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello");
  }, 3000);
});

p.finally(() => {
  console.log("Done");
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
