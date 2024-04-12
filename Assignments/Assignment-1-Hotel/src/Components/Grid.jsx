import React from "react";
import "./grid.css";
import loc from "../assets/location.png";
import bed from "../assets/bed.png";
import wifi from "../assets/wifi.png";
import tv from "../assets/tv.png";

class Grid extends React.Component {
  render() {
    return (
      <>
        <div className="card-wrapper">
          <div>
            <img src={this.props.image} alt="" />
            <div className="card">
              <h4>Hotel Earth Light</h4>
              <button className="btn">{this.props.rating}</button>
            </div>
            <br />
            <div className="location-icon">
              <img src={loc} alt="" />
              <p>{this.props.location}</p>
            </div>
          </div>

          <br />

          <div className="end">
            <div className="rate">${this.props.rate}/days</div>
            <div className="icon-wrapper">
              <div className="icon">
                <img src={bed} alt="" />
              </div>
              <div className="icon">
                <img src={tv} alt="" />
              </div>
              <div className="icon">
                <img src={wifi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Grid;
