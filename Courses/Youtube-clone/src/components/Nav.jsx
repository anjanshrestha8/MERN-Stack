import React from "react";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/images/logo.png";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="navigation-wrapper">
            <div className="left">
              <div>
                <img src={menu} alt="" />
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <h1>
                  YouTube<sub>NP</sub>
                </h1>
              </div>
            </div>
            <div className="center"></div>
            <div className="right"></div>
          </div>
        </main>
      </>
    );
  }
}

export default Nav;
