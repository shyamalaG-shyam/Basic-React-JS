import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
      // console.log("inEfftect")
      setCalculation(()=>counter*2)
  });

  return (
    <div>
      <p style={{color:"white"}}>{counter}</p>
      <button onClick={()=>setCounter((prev)=>prev+1)}>*</button>
      <p style={{color:"white"}}>{calculation}</p>
    </div>
  );
};
export default Counter;
