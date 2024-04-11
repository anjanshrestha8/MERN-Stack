import React from "react";
import Navigation from "./Components/Nav";
import Board from "./Components/Board";

import bg from "./assets/bg1.png";
import hotel1 from "./assets/hotel1.png";
import hotel2 from "./assets/hotel2.png";
import hotel3 from "./assets/hotel3.png";
import hotel4 from "./assets/hotel4.png";

import "./app.css";
import Grid from "./Components/Grid";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="body">
          <Navigation />

          <Board image={bg} />

          <div className="grid-wrapper">
            <Grid
              image={hotel1}
              location="Chitwan, Shauraha"
              rating={9.0}
              rate={299}
            />
            <Grid
              image={hotel2}
              location="Chitwan, Shauraha"
              rating={7.0}
              rate={150}
            />
            <Grid
              image={hotel3}
              location="Kathmandu, Thamel "
              rating={5.0}
              rate={70}
            />
            <Grid
              image={hotel4}
              location="Kathmandu, Dallu"
              rating={9.0}
              rate={199}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
