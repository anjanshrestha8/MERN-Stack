import React from "react";
import Card from "./Component/Card";

import profile1 from "./assets/anjan.svg";
import profile2 from "./assets/sajak.svg";
import profile3 from "./assets/vijay.svg";

// import Greeting from "./Component/Greeting";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="card-wrapper">
          <Card greeting="K xa hajuur!!!" name="Vijay" image={profile3} />
          <Card greeting="K xa halkhabar!!" name="Anjan" image={profile1} />
          <Card greeting="Eid Mubarak" name="Sajak" image={profile2} />
        </div>
      </>
    );
  }
}

export default App;
