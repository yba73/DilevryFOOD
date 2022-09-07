const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

app.use(express.json());
require("dotenv").config();
require("./config/connectDB");

//Routes
//User
app.use("/api/v1/users", require("./routes/userRoute"));
//Post
app.use("/api/v1/posts", require("./routes/postRoute"));
//Category
app.use("/api/v1/homes", require("./routes/categoryRoute"));

//products
app.use("/api/v1/foods", require("./routes/productRoute"));

//image
app.use("/my-images", express.static("my-images"));

app.listen(process.env.PORT, () =>
  console.log("listening on port ", process.env.PORT)
);
