/* eslint-disable react/prop-types */
import "../assets/css/components/button.css";
function Button(props) {
  return (
    <>
      <div>
        <button className={props.className} onClick={props.onclick}>
          {props.value}
        </button>
      </div>
    </>
  );
}
export default Button;
