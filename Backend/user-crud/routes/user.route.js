const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let mockData = [];

router.get("/", (request, response) => {
  response.send(mockData);
});

router.post("/", (request, response) => {
  const payload = request.body;
  const id = uuidv4();
  payload.id = id;
  console.log(id);
  console.log(payload.id);

  mockData.push({ id, ...payload });

  response.send("user add garxa ");
});
module.exports = router;
