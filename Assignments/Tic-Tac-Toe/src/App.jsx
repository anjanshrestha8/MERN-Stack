import React from "react";
import Box from "./components/Box";

import "./assets/Css/index.css";
import Button from "./components/Button";

import cross_icon from "./assets/cross.png";
import cricle_icon from "./assets/circle.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turnCount: 0,
      value: "",
    };
  }

  display = () => {
    this.setState({
      turnCount: this.state.turnCount + 1,
    });

    if (this.state.turnCount % 2 == 0) {
      console.log("x");
    } else {
      console.log("o");
    }

    console.log(this.state.turnCount);
  };

  render() {
    return (
      <>
        <main>
          <section className="header">
            <h1>
              Tic Tac Toe Game in <span>React</span>
            </h1>
          </section>
          <div className="board">
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
            <Box
              onClick={() => {
                this.display();
              }}
            />
          </div>

          <div className="button-wrapper">
            <Button className="reset" buttonName="Reset" />
          </div>
        </main>
      </>
    );
  }
}

export default App;
