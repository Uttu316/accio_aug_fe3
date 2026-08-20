import { sum, obj, y as Ay, default as OtherMain } from "./a.js";
import MyMain from "./a.js";

import * as MyA from "./a.js";

let x = 20;

let y = Ay + 40;

const r = sum(x, y);

console.log(r);

obj.name = "Shubam";
const h2 = document.createElement("H2");

h2.innerHTML = "Sum is: " + r;

document.body.append(h2);

console.log(MyA);
MyMain();
// OtherMain();
// MyA.sum()
// MyA.y
