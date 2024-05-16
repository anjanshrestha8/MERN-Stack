/* eslint-disable react/prop-types */
import "./assets/card.css";

function Card(props) {
  return (
    <>
      <p>
        <span>Title :</span> {props.title}
      </p>
      <p>
        <span>Description :</span> {props.description}
      </p>
      ;
    </>
  );
}

export default Card;
