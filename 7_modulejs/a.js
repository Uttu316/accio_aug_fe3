var x = 2;
export let y = 4;
export function sum(a, b) {
  return a + b;
}

export const obj = {
  name: "Rahul",
};
function Main() {
  const el = document.createElement("h3");
  el.innerHTML = "App is Running";
  document.body.append(el);
}
export default Main;
console.log(x, y);
