import React from "react";
import "../assets/css/components/header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header className="page-header">
          <h1>{this.props.title}</h1>
        </header>
      </>
    );
  }
}

export default Header;
