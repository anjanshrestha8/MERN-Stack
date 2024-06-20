import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/components/s-products.css";
function SingleProducts() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [individualData, setIndividualData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIndividualData(data);
      });
  }, [params]);

  const add = () => {
    setQuantity((prev) => prev + 1);
  };
  const minus = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  console.log(params);
  return (
    <>
      <marquee direction="left">
        <span>Flash Sale </span>!! Get 25% Off !!
      </marquee>
      <div className="wrapper">
        <div className="image">
          <img
            src={individualData.image ? individualData.image : "No image"}
            alt=""
          />
        </div>

        <div className="desc">
          <h1>{individualData.title ? individualData.title : "No title"}</h1>
          <br />
          <p>
            {individualData.description
              ? individualData.description
              : "No desc"}
          </p>
          <br />
          <hr />
          <br />
          <div className="price">
            <h3>
              $ {individualData.price ? individualData.price : "No price"}
            </h3>
            <p className="rate">
              Rating:{" "}
              {individualData.rating ? individualData.rating.rate : "No rating"}
            </p>
          </div>
          <br />
          <div className="quantity">
            <h4>Quantity: </h4>
            <button onClick={add}>+</button>
            <label>{quantity}</label>
            <button onClick={minus}>-</button>
          </div>
          <br />
          <div className="button-section">
            <button className="buy">Buy Now</button>
            <button className="cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProducts;
