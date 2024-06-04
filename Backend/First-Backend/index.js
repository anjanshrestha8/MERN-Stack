const express = require("express");
const app = express();

// Middleware to handle json value
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello I am ready to communicate....");
});

app.get("/users", (request, response) => {
  response.json([
    {
      id: "1",
      name: {
        firstName: "anjan",
        lastName: "shrestha",
      },
      age: "20",
    },
    {
      id: "2",
      name: {
        firstName: "saja yatayat",
        lastName: "shrestha",
      },
      age: "35",
    },
  ]);
});

app.get("/dog-facts", (request, response) => {
  response.json({
    id: "1",
    facts: "Dogs can make out the colors blue and yellow.",
  });
});

app.post("/", (request, response) => {
  console.log(request.body);
  // save to database
  response.send(`The name of th user is ${request.body.name}`);
});

app.get("/users/:id", (request, response) => {
  // Get th item from id

  const paramReq = request.params;
  console.log(paramReq);
  response.send("This is user with id =" + paramReq.id);
});

app.listen(8080, () => {
  console.log("running......");
});
