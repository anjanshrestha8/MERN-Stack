const express = require("express");
const app = express();
const indexRouter = require("./routes/index.route");
const userRouter = require("./routes/user.route");
const articleRouter = require("./routes/article.route");

app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/articles", articleRouter);

app.listen(8080, () => {
  console.log("Server is running");
});
