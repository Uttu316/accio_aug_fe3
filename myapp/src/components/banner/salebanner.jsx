import { useEffect, useState } from "react";

const SaleBanner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //setup function
    console.log("Sale Banner mounted ");

    return () => {
      //cleanup function
      console.info("Sale banner unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  return (
    <div>
      <h1>Sale is Live</h1>
      <button onClick={() => setCount(count + 5)}>{count}% off</button>
    </div>
  );
};

export default SaleBanner;
