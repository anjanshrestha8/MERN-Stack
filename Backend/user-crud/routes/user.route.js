const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let mockData = [];

router.get("/", (request, response) => {
  response.send(mockData);
});

router.post("/", (request, response) => {
  let payload = request.body;
  const id = uuidv4();
  payload.id = id;
  console.log(id);
  console.log(payload.id);

  mockData.push({ id, ...payload });

  response.send({
    message: "New User Added",
    data: payload,
  });
});

router.patch("/:id", (request, response) => {
  console.log(request.params.id);

  const userId = request.params.id;
  let indexToUpdate = mockData.findIndex((item) => {
    return item.id === userId;
  });
  mockData[indexToUpdate] = {
    ...mockData[indexToUpdate],
    ...request.body,
  };
  response.send(mockData);
});
module.exports = router;