import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  });
  console.log("user bata ho la ");
  return (
    <>
      {user?.map((value, index) => {
        <div key={index} className="user-wrapper">
          <h1>User Data</h1>
          <p>Name: {value.name}</p>
          <p>Username : {value.username}</p>
          <p>Email: {value.email}</p>
        </div>;
      })}
    </>
  );
}

export default User;
