import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: false,
      // age: 10,
      imageURL: "",
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          imageURL: data.message,
        });
      });
  }

  render() {
    return (
      <>
        {/* <button
          onClick={() => {
            this.setState({
              isClicked: !this.state.isClicked,
              age: 30,
            });
            console.log(this.state.isClicked);
          }}
        >
          {this.state.isClicked ? "child" : "adult"}
        </button>
        <h1>I am {this.state.isClicked ? 30 : 10} years old!!!!</h1> */}

        <div>
          <img src={this.state.imageURL} alt="" />
        </div>
      </>
    );
  }
}

export default App;
