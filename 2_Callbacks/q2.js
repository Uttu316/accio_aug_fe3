function getData(userId, onSuccess, onFailure) {
  console.log("A");

  if (userId.includes("abc")) {
    onSuccess("Hello");
    console.log("B");
  } else {
    onFailure("Bye");
    console.log("C");
  }
}

console.log("D");
getData(
  "aabc",
  (v) => {
    console.log(v);
  },
  (e) => {
    console.log("Error", e);
  },
);
console.log("E");
