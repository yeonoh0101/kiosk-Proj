const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const ProductController = require("../controllers/products.controller");
const productController = new ProductController();

// 상품 전체 조회 API
router.get("/products", productController.ALLProducts);

// 상품 타입별 조회 API
router.get("/products/:type", productController.typeAllProducts);

// 상품 추가 API
router.post("/product", authMiddleware, productController.createProduct);

// 상품 수정 API
router.patch(
  "/product/:productId",
  authMiddleware,
  productController.updateProduct
);

// 상품 삭제 check API
router.delete(
  "/product/:productId",
  authMiddleware,
  productController.checkProduct
);

// 확인받고 상품 삭제 API
router.delete(
  "/product/:productId/:check",
  authMiddleware,
  productController.deleteProduct
);

module.exports = router;
