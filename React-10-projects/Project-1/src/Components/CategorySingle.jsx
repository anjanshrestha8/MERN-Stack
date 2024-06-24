import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";
import "../assets/css/components/app.css";

function CategorySingle() {
  const params = useParams("");
  const [categoryData, setCategoryData] = useState([]);
  async function getFetch() {
    const data = await axios.get(
      `https://fakestoreapi.com/products/category/${params.item}`
    );
    setCategoryData(data.data);
  }

  useEffect(() => {
    getFetch();
  }, [params.item]);
  return (
    <>
      <div className="product-section">
        {categoryData?.map((item, index) => {
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
    </>
  );
}

export default CategorySingle;
