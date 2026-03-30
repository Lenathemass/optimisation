import React from "react";
import HeavySum from "./components/HeavySum";
import LargeFilter from "./components/LargeFilter";
import PrimeChecker from "./components/PrimeChecker";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Performance Optimization Tasks</h1>

      <HeavySum />
      <hr />

      <LargeFilter />
      <hr />

      <PrimeChecker />
    </div>
  );
}

export default App;