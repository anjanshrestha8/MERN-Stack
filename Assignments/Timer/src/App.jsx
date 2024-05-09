import React from "react";
import "./assets/css/App.css";

import Card from "./Components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isActive: false,
    };
    this.interval;
  }
  startTimer = () => {
    this.setState({ isActive: true });
    this.interval = setInterval(() => {
    
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };
  stopTimer = () => {
    console.log("Stopped");
    clearInterval(this.interval);
  };
  resetTimer = () => {
    console.log("resettimer");
    clearInterval(this.interval);
    this.setState({ time: 0, isActive: false });
  };
  display = (time) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);

    return `${minute.toString().padStart(2, "0")} min : ${second
      .toString()
      .padStart(2, "0")} sec`;
  };
  render() {
    console.log(this.state.isActive);

    return (
      <>
        <div className="main-container">
          <Card
            display={this.display(this.state.time)}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            resetTimer={this.resetTimer}
          />
          {/* <Timer /> */}
        </div>
      </>
    );
  }
}

export default App;
