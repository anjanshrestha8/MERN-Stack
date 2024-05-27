import { useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Input from "./Components/Input";
import "./assets/css/components/app.css";
function App() {
  const [task, setTask] = useState([{ work: "anjan" }]);
  const [inputField, setInputField] = useState("");
  const insertData = () => {
    setTask((prev) => {
      return setTask([...prev, { work: inputField }]);
    });
  };

  const editItem = () => {
    console.log("edit");
  };

  const deleteItem = (index) => {
    const newArray = task.filter((filterItem, filterIndex) => {
      return filterIndex !== index;
    });
    console.log(newArray);
  };
  return (
    <>
      <main className="main-container">
        <section className="header-section">
          <h1>Todo Apps</h1>
          <div className="input-section">
            <Input
              placeholder="Enter some tasks"
              onchange={(event) => {
                setInputField([event.target.value]);
                console.log(inputField);
              }}
            />
            <Button
              value="Add Task"
              className="btn btn-success"
              onclick={insertData}
            />
          </div>
        </section>
        <hr />
        <br />
        <section className="task-section">
          <h2> #Your Tasks</h2>
          {task?.map((task, index) => {
            return (
              <>
                <Card
                  key={index}
                  name={task.work}
                  id={index}
                  editItem={editItem}
                  deleteItem={() => {
                    deleteItem(index);
                  }}
                />
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}
export default App;
