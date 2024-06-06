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
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/products">PRODUCTS</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/contacts">CONTACTS</a>
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
