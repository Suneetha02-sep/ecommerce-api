import express from "express";

import {
  getProducts,
  addProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();


// GET
router.get("/products", getProducts);


// POST
router.post("/products", addProduct);


// DELETE
router.delete("/products/:id", deleteProduct);


export default router;