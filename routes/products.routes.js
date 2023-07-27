const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products.controller");
const productController = new ProductController();

// 상품 전체 조회
router.get("/products", productController.ALLProducts);

// 상품 타입별 조회
router.get("/products/:type", productController.typeAllProducts);

// 상품 추가
router.post("/product", productController.createProduct);

// 상품 수정
router.patch("/product/:productId", productController.updateProduct);

module.exports = router;
