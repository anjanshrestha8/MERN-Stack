import React from "react";
import "./app.css";
import cookie from "./assets/cookie.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // fat function
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this.counter);
  };

  render() {
    console.log("render");

    return (
      <>
        <main>
          <div className="main-wrapper">
            <h1>Click To Demolish!</h1>
            <h2>Counter: {this.state.counter}</h2>

            <div className="image-wrapper">
              <div className="image">
                <img src={cookie} alt="" onClick={this.increment} />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
