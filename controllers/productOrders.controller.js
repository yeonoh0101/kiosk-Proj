const ProductOrderService = require("../services/productOrders.service");

class ProductOrderController {
  productOrderService = new ProductOrderService();

  // 상품 발주
  ProductOrder = async (req, res, next) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    const { status, message } = await this.productOrderService.ProductOrder(
      productId,
      quantity
    );

    res.status(status).json({ message });
  };
}

module.exports = ProductOrderController;
