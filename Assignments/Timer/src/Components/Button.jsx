import React from "react";
import "../assets/css/button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button
          className={this.props.className || "button"}
          onClick={this.props.click}
        >
          {this.props.title || "button"}
        </button>
      </>
    );
  }
}

export default Button;
