const express = require("express");
const authRoutes = require("./routes/auth.route");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/auth", authRoutes);

mongoose
  .connect(
    "mongodb+srv://ajnstha2003:ajnstha2003@auth-learning.j4wcqjf.mongodb.net/?retryWrites=true&w=majority&appName=auth-learning"
  )
  .then((data) => {
    console.log("Mongodb Connected.....");
  })
  .catch((error) => {
    console.log("Database not connected....");
  });

app.listen(PORT, () => {
  console.log("Server is running at the PORT >", PORT);
});
