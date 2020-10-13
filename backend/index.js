const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world...");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});