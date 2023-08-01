const express = require("express");
const router = express.Router();

const ProductOrderController = require("../controllers/productOrders.controller");
const productOrderController = new ProductOrderController();

// 상품 발주
router.post("/order/product/:productId", productOrderController.ProductOrder);

module.exports = router;
