const ProductOrderService = require("../services/productOrders.service");

class ProductOrderController {
  productOrderService = new ProductOrderService();

  // 상품 발주
  productOrder = async (req, res, next) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    const { status, message } = await this.productOrderService.productOrder(
      productId,
      quantity
    );

    res.status(status).json({ message });
  };

  // 발주 상태 수정
  productOrderUpdate = async (req, res, next) => {
    const { productId, productOrderId, ProductOrderState } = req.params;

    const { status, message } =
      await this.productOrderService.productOrderUpdate(
        productId,
        productOrderId,
        ProductOrderState
      );

    res.status(status).json({ message });
  };
}

module.exports = ProductOrderController;
