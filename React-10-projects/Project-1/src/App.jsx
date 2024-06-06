import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import "./assets/css/components/app.css";
function App() {
  return (
    <>
      <main>
        <section className="navigation-section">
          <Nav />
        </section>
        <section className="hero-section">
          <LandingPage />
        </section>
      </main>
    </>
  );
}
export default App;
