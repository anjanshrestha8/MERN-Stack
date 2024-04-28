import React from "react";
import "./app.css";
import sad from "./assets/images/sad.svg";
import coin from "./assets/images/coin.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
    };
  }

  render() {
    return (
      <>
        <main>
          <div className="header">
            <h1>Coin Clicker !</h1>
            <h2>Make the character happy..😀😀</h2>
            <p>Tip: Click coin to increase the balance..</p>

            <h3>Bank Balance: Rs {this.state.balance}</h3>
          </div>

          <div className="image-wrapper">
            <div className="button">
              {this.state.balance > 50000 ? (
                <img src={sad} alt="" />
              ) : (
                <img src={coin} alt="" />
              )}
            </div>
            <div className="button">
              <img
                src={coin}
                alt=""
                onClick={() => {
                  this.setState({
                    balance: this.state.balance + 1000,
                  });
                }}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
