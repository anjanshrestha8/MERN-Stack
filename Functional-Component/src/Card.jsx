/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <p>{props.desc}</p>
    </>
  );
}

export default Card;
