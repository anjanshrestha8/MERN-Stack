import { useEffect, useState } from "react";
import "./assets/card.css";
import Card from "./Card";
import User from "./User";

function App() {
  const [posts, setPosts] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      setPosts(post);
    });

  return (
    <>
      <div className="main-wrapper">
        {posts?.map((value, index) => {
          return (
            <div key={index} className="card-wrapper">
              <Card title={value.title} description={value.body} />
            </div>
          );
        })}
      </div>

      {/* <User /> */}
    </>
  );
}

export default App;
