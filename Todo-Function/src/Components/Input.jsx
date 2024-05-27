/* eslint-disable react/prop-types */
import "../assets/css/components/input.css";
function Input(props) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={props.onchange}
        />
      </div>
    </>
  );
}
export default Input;
