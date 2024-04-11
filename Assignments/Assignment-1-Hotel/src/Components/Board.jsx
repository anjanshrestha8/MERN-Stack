import React from "react";
import "./board.css";

class Board extends React.Component {
  render() {
    return (
      <>
        <div className="image-wrapper">
          <img src={this.props.image} alt="" />
          <div className="dec">
            <b>
              <h1>BOOKING JUST GOT EASIER</h1>
            </b>
          </div>
        </div>
      </>
    );
  }
}

export default Board;
