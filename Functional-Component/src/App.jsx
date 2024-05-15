import "./App.css";
import Button from "./Button";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Add gara na
      </button>

      <button
        onClick={() => {
          setCount((prev) => {
            return prev - 1;
          });
        }}
      >
        {" "}
        minus gara na
      </button>
    </>
  );
}

export default App;
