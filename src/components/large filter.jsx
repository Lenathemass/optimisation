import React, { useState, useMemo } from "react";

function LargeFilter() {
  const [arr, setArr] = useState([]);

  const generateArray = () => {
    let newArr = [];
    for (let i = 0; i < 10000; i++) {
      newArr.push(Math.floor(Math.random() * 1000));
    }
    setArr(newArr);
  };

  const filteredSum = useMemo(() => {
    console.log("Filtering...");
    return arr
      .filter((num) => num % 2 === 0)
      .reduce((acc, curr) => acc + curr, 0);
  }, [arr]);

  return (
    <div>
      <h2>Large Array Filtering</h2>
      <button onClick={generateArray}>Generate Array</button>
      <h3>Sum of Even Numbers: {filteredSum}</h3>
    </div>
  );
}

export default LargeFilter;