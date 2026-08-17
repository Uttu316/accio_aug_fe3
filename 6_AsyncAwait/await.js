const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am Avenger");
    }, 3000);
  });
};

console.log("start");
const getData = async (userId) => {
  if (userId.includes("A")) {
    console.log("Call api");
    const res = await api();
    console.log(res);
    return res + userId;
  } else {
    return "Bot";
  }
};

const output = getData("Abc");

output.then((value) => {
  console.log(value);
});
