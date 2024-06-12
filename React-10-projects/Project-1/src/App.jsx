import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./Components/ProductsCard";
import "./assets/css/components/app.css";

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
        <section className="product-section-wrapper">
          <h1>OUR PRODUCTS</h1>

          <div className="product-section">
            {allProducts.map((item, index) => {
              return (
                <>
                  <Link to={"/products/" + item.id} className="product-link">
                    <ProductsCard
                      key={index}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      id={item.id}
                    />
                  </Link>
                </>
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
