/* eslint-disable react/prop-types */
function ProductsCard(props) {
  return (
    <>
      <div className="card-wrapper">
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{"$ " + props.price}</p>
      </div>
    </>
  );
}
export default ProductsCard;
