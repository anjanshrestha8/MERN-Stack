const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

// this is mock data

let mockData = [];

app.use(express.json());

app.get("/", (request, response) => {
  //  return response mock Data
  response.send(mockData);
});

// to post the data to mockData
app.post("/", (request, response) => {
  const id = uuidv4();

  const payLoad = request.body;
  //   payLoad.id = id;

  mockData.push({ id, ...payLoad });

  response.send({
    message: "New user added",
  });
});

app.listen(8080, () => {
  console.log("server is running");
});
