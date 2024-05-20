import { useState } from "react";
import Card from "./Components/Card";
import "./assets/css/index.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => {
      return prev + 1000;
    });
  };

  const desValue = () => {
    setCount((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 500;
      }
    });
  };
  return (
    <>
      <div className="main-wrapper">
        <Card count={count} add={addValue} des={desValue} />
      </div>{" "}
    </>
  );
}

export default App;
