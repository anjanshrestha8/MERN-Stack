import React from "react";

class Age extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: 0,
    };
  }

  render() {
    return (
      <>
        <h1>I am {"18+ ."}</h1>
        <button
          onClick={() => {
            console.log(this.state.isClicked);
          }}
        >
          I am adult!
        </button>
        <button>I am child!</button>
      </>
    );
  }
}

export default Age;
