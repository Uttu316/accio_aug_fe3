import { useState } from "react";
import SaleBanner from "./salebanner";

const Banner = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Track Banner</h1>
      <button onClick={() => setShow(!show)}>Toggle banner</button>
      {show && <SaleBanner />}
    </div>
  );
};

export default Banner;
