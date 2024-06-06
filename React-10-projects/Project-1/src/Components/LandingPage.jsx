import "../assets/css/components/lp.css";

import shoes from "../assets/images/shoe_image.png";
function LandingPage() {
  return (
    <>
      <div className="hero-section-wrapper">
        <div className="left-side">
          <h1>
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>
          <br />
          <hr />
          <br />
          <br />
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="button-section">
            <button className="btn btn-bg">Shop Now</button>
            <button className="btn btn-ot">Category</button>
          </div>
        </div>
        <div className="right-side">
          <img src={shoes} alt="" />
        </div>{" "}
      </div>
    </>
  );
}
export default LandingPage;
