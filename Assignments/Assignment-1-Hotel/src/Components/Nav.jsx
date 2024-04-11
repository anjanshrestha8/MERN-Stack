import React from "react";
import "./nav.css";
class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="navigation-wrapper">
          <div>
            <h1>Maikalal.</h1>
          </div>
          <div className="navigation">
            <nav>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Booking</li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
