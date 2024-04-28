import React from "react";
import "../assets/css/components/input.css";

class Input extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          name={this.props.name}
          id=""
          placeholder={this.props.placeholder || "Enter something"}
          className={this.props.className || "input"}
          disabled={this.props.disabled}
          required={this.props.required}
          value={this.props.value}
        />
      </>
    );
  }
}

export default Input;
