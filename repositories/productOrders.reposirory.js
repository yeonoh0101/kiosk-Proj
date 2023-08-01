const { Products, ProductOrders } = require("../models");
const sequelize = require("sequelize");

class ProductOrderRepository {
  // 상품 발주
  ProductOrder = async (productId, quantity) => {
    const productOrder = await ProductOrders.create({
      ProductId: productId,
      quantity,
    });
    // 상품에 수량을 추가해준다.
    await Products.update(
      { quantity: sequelize.literal(`quantity + ${quantity}`) },
      { where: { productId } }
    );

    return productOrder;
  };
}

module.exports = ProductOrderRepository;
