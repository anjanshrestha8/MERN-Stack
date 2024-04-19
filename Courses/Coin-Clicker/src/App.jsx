import React from "react";
import sad from "./assets/images/sad.svg";
import coin from "./assets/images/coin.jpeg";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="header">
          <h1>Make the character happy!!!!!!</h1>
          <p>Tips: click the coin</p>
          <p>Balance:{this.state.balance}</p>
        </div>

        <div className="button">
          <img src={sad} alt="" />
          <img
            src={coin}
            alt=""
            onClick={
              this.setState({
              balance: this.state.balance + 1000,
            })}
          />
        </div>
      </>
    );
  }
}

export default App;
