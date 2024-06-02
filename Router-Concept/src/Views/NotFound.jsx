import { Link } from "react-router-dom";
import Home from "./Home";

function NotFound() {
  return (
    <>
      <h1>Are you lost?</h1>
      <Link to={"/"} element={<Home />}>
        Redirecting to Home Page
      </Link>
    </>
  );
}

export default NotFound;
