const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// import routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

// connect to DB
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    try {
      console.log("db connected");
    } catch (error) {
      console.log(error);
    }
  }
);

app.use(express.json());

// route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);
app.listen(process.env.PORT, () => {
  console.log("Server up and running");
});
