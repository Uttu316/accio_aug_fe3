const getData = async (userId) => {
  if (userId.includes("A")) {
    return "User";
  } else {
    return "Bot";
  }
};

const output = getData("Abc");

console.log(output);
