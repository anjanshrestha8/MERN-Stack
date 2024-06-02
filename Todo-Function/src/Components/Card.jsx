/* eslint-disable react/prop-types */
import "../assets/css/components/card.css";
import Button from "./Button";

function Card(props) {
  return (
    <>
      <div className="card-wrapper">
        <div>
          <input type="checkbox" className="checkbox" />
        </div>
        <div>
          <ul>
            <li>
              {props.name}
              <div className="button-wrapper">
                <Button
                  className="btn btn-edit"
                  value="Edit"
                  onclick={props.editItem}
                />
                <Button
                  className="btn btn-delete"
                  value="Delete"
                  onclick={props.deleteItem}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Card;
