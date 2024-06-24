import logo from "../assets/images/brand_logo.png";
import "../assets/css/components/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="login">
          <button className="login">Login</button>
        </div>
      </div>
    </>
  );
}
export default Nav;
