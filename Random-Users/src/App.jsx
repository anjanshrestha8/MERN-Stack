import { mockData } from "./mockData";
import "./assets/card.css";
import { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, []); // userEffect -> callback , []
  return (
    <>
      {/* card component */}
      {users?.map((value, id) => {
        return (
          <div key={id} className="user-card">
            <h1>Name: {value.name}</h1>
            <p>Email: {value.email}</p>
            <p>Phone: {value.phone}</p>
            <p>Website: {value.website}</p>
            <p>Company {value.company.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
