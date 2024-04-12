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
        <main>
          <div className="body">
            <Navigation />

            <Board image={bg} />

            <div className="grid-wrapper">
              <Grid
                image={hotel1}
                hotelName="Hotel Earth Light"
                location="Chitwan, Shauraha"
                rating={9.1}
                rate={299}
              />
              <Grid
                image={hotel2}
                hotelName="Green Park Hotel"
                location="Chitwan, Shauraha"
                rating={7.1}
                rate={150}
              />
              <Grid
                image={hotel3}
                hotelName="Jungle Crown"
                location="Kathmandu, Thamel "
                rating={5.1}
                rate={70}
              />
              <Grid
                image={hotel4}
                hotelName="Wildlife Jungle Hotel"
                location="Kathmandu, Dallu"
                rating={9.1}
                rate={199}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
