import React from "react";
import Header from "./component/Header";
import "./assets/css/index.css";
import Input from "./component/Input";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "first state",
    };
  }
  render() {
    return (
      <>
        <main className="main-container">
          <Header title="Todo App" />
          <Input placeholder="Enter some task that can be done" name="todo" />
        </main>
      </>
    );
  }
}

export default App;
