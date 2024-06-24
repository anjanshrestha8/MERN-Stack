import { useState } from "react";
import "../assets/css/components/lp.css";

import shoes from "../assets/images/shoe_image.png";
import Category from "./Category";
import { Link } from "react-router-dom";

function LandingPage() {
  const [category, setCategory] = useState([]);
  const [toggleCategory, setToggleCategory] = useState(false);
  const fetchCategory = () => {
    setToggleCategory(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  };
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
            <button className="btn btn-ot" onClick={fetchCategory}>
              Category
            </button>
          </div>
        </div>
        <div className="right-side">
          <img src={shoes} alt="" />
        </div>{" "}
      </div>

      <br />
      <br />

      <div className="category">
        {toggleCategory ? <h1> Top Categories</h1> : <h1></h1>}
      </div>
      <div className="category-section-wrapper">
        {category?.map((item, index) => {
          return (
            <>
              <Link to={"/category/" + item}>
                <Category title={item} key={index} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
export default LandingPage;
