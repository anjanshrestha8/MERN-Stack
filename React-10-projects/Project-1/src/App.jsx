import { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import ProductsCard from "./Components/ProductsCard";
import "./assets/css/components/app.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Try from "./Components/try";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  return (
    <>
      <main>
        <section className="navigation-section">
          <Nav />
        </section>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/products" element={<ProductsCard />}></Route>

            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>

        <section className="product-section-wrapper">
          <h1>OUR PRODUCTS</h1>
          <div className="product-section">
            {allProducts.map((item, index) => {
              return (
                <ProductsCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
export default App;
