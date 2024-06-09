/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../assets/css/components/product-card.css";
function ProductsCard(props) {
  return (
    <>
      <div className="card-wrapper">
        <div className="product-wrapper">
          <div className="product-image">
            <img src={props.image} alt="" onClick={console.log(props.id)} />
          </div>
          <div className="info">
            <label>{props.title}</label>

            <br />
            <br />
            <p>
              {" "}
              $ <span>{props.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsCard;
