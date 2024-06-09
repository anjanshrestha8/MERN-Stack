const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello World inside from index file");
});

module.exports = router;
