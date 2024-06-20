import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Try() {
  const params = useParams();

  const [individualData, setIndividualData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIndividualData(data);
      });
  }, [params.id]);

  console.log(individualData);
  return (
    <>
      <h1>yo individual products</h1>
    </>
  );
}

export default Try;
