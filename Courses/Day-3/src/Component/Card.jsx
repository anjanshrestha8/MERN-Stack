import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="profile">
            <img src={this.props.image} alt="" />
          </div>
          <h1>Meet, {this.props.name}</h1>
          <p>{this.props.greeting}</p>
        </div>
      </>
    );
  }
}

export default Card;
