import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const desValue = () => {
    setCount((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <>
      <h2>This is simple Counter App and Understanding hooks............</h2>

      <h1>Counter : {count}</h1>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={desValue}>Dec value</button>
    </>
  );
}

export default App;
