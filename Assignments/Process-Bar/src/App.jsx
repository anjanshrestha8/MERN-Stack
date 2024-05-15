import React from "react";
import "./assets/css/components/App.css";
class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h3 className="heading">Progress Bar</h3>
          <progress value={10} max={100} className="progress-bar"></progress>
        </div>
      </>
    );
  }
}

export default App;
