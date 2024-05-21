import { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const today = Date.now();
  // console.log(moment(today).format("MMMM Do YYYY, h:mm:ss a"));
  console.log(moment().fromNow());

  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(() => {
    console.log("counter ko ho yo ");
  }, [count]);

  return (
    <>
      <div>
        <span>Current Count is :{count}</span>
      </div>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Counter increase
      </button>

      <div>
        <input
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          placeholder="type something"
        />
        <p>{input}</p>
      </div>
    </>
  );
}

export default App;
