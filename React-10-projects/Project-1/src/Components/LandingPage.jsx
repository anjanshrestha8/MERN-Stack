import "../assets/css/components/lp.css";
import flip from "../assets/images/flipkart.png";
import amazon from "../assets/images/amazon.png";
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
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="button-section">
            <button className="btn btn-bg">Shop Now</button>
            <button className="btn btn-ot">Category</button>
          </div>
          <div>
            <p>Also available on:</p>

            <div className="icon-section">
              <div>
                <img src={flip} alt="" />
              </div>
              <div>
                <img src={amazon} alt="" />
              </div>
            </div>
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
