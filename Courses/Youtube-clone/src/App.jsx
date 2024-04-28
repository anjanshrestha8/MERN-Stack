import React from "react";
import "./App.css";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="navigation-section">
            <Nav />
          </div>
        </main>
      </>
    );
  }
}

export default App;
