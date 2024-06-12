import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";

import Try from "./try";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import App from "../App";

function Router() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/products" element={<App />}></Route>
          <Route path="/products/:id" element={<Try />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
