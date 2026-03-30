import React, { useState, useMemo } from "react";

function PrimeChecker() {
  const [num, setNum] = useState(2);

  const isPrime = (n) => {
    console.log("Checking prime...");
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
      for (let j = 0; j < 10000000; j++) {}
      if (n % i === 0) return false;
    }

    return true;
  };

  const result = useMemo(() => isPrime(num), [num]);

  return (
    <div>
      <h2>Prime Checker</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <h3>{result ? "Prime Number" : "Not Prime"}</h3>
    </div>
  );
}

export default PrimeChecker;