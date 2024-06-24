const express = require("express");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", (request, response) => {
  response.send("trying to login");
});

router.post("/register", async (request, response) => {
  //  first get all the user provided data
  const payload = request.body;

  //   check if email already exists
  const user = await User.findOne({ email: payload.email });
  if (user) {
    return response.status(409).send("User already exists");
  }

  //   if no user continue sign up

  const hash = await bcrypt.hash(payload.password, 10);
  payload.password = hash;

  //   add the user data to the data base
  try {
    const data = await User.create(payload);

    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
