const express = require("express");
const router = express.Router();

const ProductOrderController = require("../controllers/productOrders.controller");
const productOrderController = new ProductOrderController();

// 상품 발주
router.post("/order/product/:productId", productOrderController.productOrder);

// 발주 상태 수정
router.put(
  "/order/product/:productId/:productOrderId/:ProductOrderState",
  productOrderController.productOrderUpdate
);

module.exports = router;
