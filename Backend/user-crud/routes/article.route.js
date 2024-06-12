const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const mockData = [];

router.get("/", (request, response) => {
  response.send(mockData);
});

router.post("/", (request, response) => {
  let payLoad = request.body;
  payLoad = {
    id: uuidv4(),
    ...payLoad,
  };
  mockData.push({ payLoad });
  response.json({
    message: "New Article added",
    data: payLoad,
  });
});

module.exports = router;
