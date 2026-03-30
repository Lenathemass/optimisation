import React, { useState, useMemo } from "react";

function HeavySum() {
  const [num, setNum] = useState(5);

  const heavySum = (n) => {
    console.log("Calculating...");
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      // simulate heavy computation
      for (let j = 0; j < 10000000; j++) {}
      sum += i;
    }

    return sum;
  };

  const result = useMemo(() => heavySum(num), [num]);

  return (
    <div>
      <h2>Heavy Sum</h2>
      <h3>Number: {num}</h3>
      <h3>Result: {result}</h3>

      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}

export default HeavySum;