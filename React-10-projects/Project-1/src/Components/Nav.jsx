import logo from "../assets/images/brand_logo.png";
import "../assets/css/components/nav.css";
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
              <li>MENU</li>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>CONTACTS</li>
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
