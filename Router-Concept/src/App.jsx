import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import NotFound from "./Views/NotFound";
import Dashboard from "./Views/Dashboard";
import Setting from "./Views/Setting";
import Profile from "./Views/Profile";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="setting" element={<Setting />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
