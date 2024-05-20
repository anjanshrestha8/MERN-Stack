/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import sad from "../assets/images/sad.svg";
import happy from "../assets/images/happy.svg";
import "../assets/css/components/card.css";
function Card(props) {
  console.log(props.count);
  return (
    <>
      <div className="card-wrapper">
        <h2>This is simple Counter App and Understanding hooks............</h2>

        <hr />
        <h1> Bank Balance : {props.count}</h1>

        <div className="image-wrapper">
          <button onClick={props.add} className="income">
            Income
          </button>

          <div className="image">
            {props.count >= 10000 ? <img src={happy} /> : <img src={sad} />}
          </div>
          <button onClick={props.des} className="expenses">
            Expenses
          </button>
        </div>
        <marquee behavior="scroll" direction="left">
          Hint: Click <span>Income</span> button to make her happy.!!!!
        </marquee>
      </div>
    </>
  );
}

export default Card;
