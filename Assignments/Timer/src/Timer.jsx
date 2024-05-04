import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isActive: false,
    };
    this.countInterval = null;
  }

  startTimer = () => {
    this.setState({ isActive: true });
    this.countInterval = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.countInterval);
    this.setState({ isActive: false });
  };

  resetTimer = () => {
    clearInterval(this.countInterval);
    this.setState({ time: 0, isActive: false });
  };

  formatTime = (time) => {
    console.log(time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}m${seconds
      .toString()
      .padStart(2, "0")}s`;
  };

  render() {
    const { time, isActive } = this.state;
    return (
      <div>
        <h1>Timer: {this.formatTime(time)}</h1>
        <div>
          {!isActive && <button onClick={this.startTimer}>Start</button>}
          {isActive && <button onClick={this.stopTimer}>Stop</button>}
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
