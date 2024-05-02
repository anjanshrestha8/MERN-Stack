import React from "react";

import "./assets/css/components/card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="card-wrapper">
          <div className="profile-picture">
            <img src={this.props.profile} alt="" />
          </div>
          <div className="user-info">
            <h1>User-Info</h1>
            <ul>
              <li>
                Username:- <span>{this.props.user}</span>
              </li>
              <li>
                Email:- <span>{this.props.email}</span>
              </li>
            </ul>
          </div>
          <div className="profile-info">
            <h1>Profile-Info</h1>

            <ul>
              <li>
                Age:- <span>{this.props.age}</span>
              </li>
              <li>
                City:- <span>{this.props.city}</span>
              </li>
              <li>
                Gender:- <span>{this.props.gender}</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
