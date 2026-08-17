const api = (value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("I am Avenger");
    }, 3000);
  });
};

console.log("start");
const getData = async (userId) => {
  try {
    if (userId.includes("A")) {
      console.log("Call api");
      const res = await api();
      const res2 = await api(res);
      const res3 = await api(res2);
      console.log(res3);
      return res + userId;
    } else {
      return "Bot";
    }
  } catch (e) {
    console.log("Error", e);
    throw "Error hapend";
  }
};

const output = getData("Abc");

output
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error main", err);
  });
