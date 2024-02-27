const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProductsById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router
