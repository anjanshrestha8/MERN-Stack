import React from "react";
import "../assets/Css/components/box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="box" onClick={this.props.onClick} value={this.props.value}></div>
      </>
    );
  }
}

export default Box;
