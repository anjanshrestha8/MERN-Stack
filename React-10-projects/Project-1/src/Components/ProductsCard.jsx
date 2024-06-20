/* eslint-disable react/prop-types */

import "../assets/css/components/product-card.css";
function ProductsCard(props) {
  return (
    <>
      <div className="card-wrapper">
        <div className="product-wrapper">
          <div className="product-image">
            <img src={props.image} alt="" />
          </div>
          <div className="info">
            <div className="title">
              <label>{props.title}</label>
            </div>
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
