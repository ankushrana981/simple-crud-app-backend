const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require('./routes/product.route.js')

const Product = require("./modals/product.modal.js");
const app = express();
const url =
  "mongodb+srv://ankushrana98145:2RO6pJ1vKqTj3bs6@backenddb.xv2nk3o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node api updated");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Connted To the Database!");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
