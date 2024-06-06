import { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import ProductsCard from "./Components/ProductsCard";
import "./assets/css/components/app.css";

function App() {
  const [allProducts, setAllProducts] = useState({});
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <>
      <main>
        <section className="navigation-section">
          <Nav />
        </section>
        <section className="hero-section">
          <LandingPage />
        </section>

        <section className="product-section">
          {allProducts?.map((item, index) => {
            <ProductsCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />;
          })}
        </section>
      </main>
    </>
  );
}
export default App;
