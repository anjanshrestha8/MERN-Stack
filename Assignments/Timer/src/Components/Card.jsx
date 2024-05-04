import React from "react";
import Button from "./Button";
import "../assets/css/card.css";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card-wrapper">
          <div className="header">
            <h1>Timer:</h1>
            <p>{this.props.display}</p>
          </div>
          <div className="button-wrapper">
            <Button
              className="btn btn-start"
              title="Start"
              click={this.props.startTimer}
            />
            <Button
              className="btn btn-stop"
              title="Stop"
              click={this.props.stopTimer}
            />
            <Button
              className="btn btn-reset"
              title="Reset"
              click={this.props.resetTimer}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Card;
