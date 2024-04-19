import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          imageUrl: data.message,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.imageUrl ? <img src={this.state.imageUrl} /> : "Loading"}
        {/* <button onClick={this.componentDidMount()}>fetch</button> */}
      </>
    );
  }
}

export default App;
