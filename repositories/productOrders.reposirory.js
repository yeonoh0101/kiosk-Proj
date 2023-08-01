const { Products, ProductOrders } = require("../models");
// const sequelize = require("sequelize");

class ProductOrderRepository {
  // 상품 발주
  ProductOrder = async (productId, quantity) => {
    const productOrder = await ProductOrders.create({
      ProductId: productId,
      quantity,
    });

    return productOrder;
  };
}

module.exports = ProductOrderRepository;
