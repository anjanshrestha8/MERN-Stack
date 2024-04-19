import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["hello", "k xa hou ", "maya na marana ta "],
      word: "",
      inputText: "",
    };
  }

  // yo function le api bata word lauxa
  getSomething() {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          list: [...this.state.list, data],
        });
      });
  }

  render() {
    return (
      <>
        <section className="header">
          <h1>Todo App</h1>
          <p>Garna Man Vako Kura*</p>
        </section>

        <section className="input-wrapper">
          <input
            type="text"
            placeholder="Enter today task..."
            onChange={(e) => {
              this.setState({
                inputText: e.target.value,
              });
            }}
          />

          <button
            onClick={() => {
              // this.getSomething();
              // value = "";
              this.setState({
                list: [...this.state.list, this.state.inputText],
              });
            }}
          >
            Add
          </button>
        </section>

        <section className="list-wrapper">
          <ul>
            {this.state.list.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default App;
