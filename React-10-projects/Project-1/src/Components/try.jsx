import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Try() {
  const params = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(params.id);
      });
  }, [params]);

  return <></>;
}

export default Try;
