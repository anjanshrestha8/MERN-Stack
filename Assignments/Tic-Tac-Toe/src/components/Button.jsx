import React from "react";
import "../assets/Css/components/button.css";
class Button extends React.Component {
  constructor(props) {
    super(props);
  }


  

  render() {
    return (
      <>
        <button className={this.props.className || "button"}>
          {this.props.buttonName || "button"}
        </button>
      </>
    );
  }
}

export default Button;
