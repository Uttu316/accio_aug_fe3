console.log("D");
const getData = (userId) => {
  console.log("A");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId.indexOf("A")) {
        resolve("Found");
      } else {
        reject("Not found");
      }
      console.log("B");
    }, 3000);
    console.log("C");
  });
};
console.log("E");
getData("ABC")
  .finally(() => {
    console.log("Searched");
  })
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log("Error", error);
  });
console.log("F");
