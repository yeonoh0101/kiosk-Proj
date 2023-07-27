const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products.controller");
const productController = new ProductController();

// 상품 전체 조회
router.get("/products", productController.ALLProducts);

// 상품 추가
router.post("/product", productController.createProduct);

module.exports = router;
