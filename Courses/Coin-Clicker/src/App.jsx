import React from "react";
import sad from "./assets/images/sad.svg";
import coin from "./assets/images/coin.jpeg";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      threshold: 50000,
    };
  }
  increase = () => {
    this.setState({
      counter: this.state.counter + 1000,
    });
  };

  handleCounter = () => {
    if (this.state.counter < this.state.threshold) {
      return <img src={coin} alt="" />;
    } else {
      return <img src={sad} alt="" />;
    }
  };
  render() {
    return (
      <>
        <div className="header">
          <h1>Coin Clicker</h1>
          <p>Make The Character Happy!!!</p>
          <p>Paisa:- Rs {this.state.counter}</p>
        </div>

        {this.handleCounter()}

        <div className="button">
          <img src={sad} alt="" />
          <img src={coin} alt="" onClick={this.increase} />
        </div>
      </>
    );
  }
}

export default App;
