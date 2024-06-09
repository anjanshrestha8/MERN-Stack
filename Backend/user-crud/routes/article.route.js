const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("yo chai article ko get ho ");
});

router.post("/", (request, response) => {
  response.send("yo chai article ko post ho ");
});

module.exports = router;
