const { Products, ProductOrders } = require("../models");
const sequelize = require("sequelize");

class ProductOrderRepository {
  // 상품 발주
  productOrder = async (productId, quantity) => {
    const productOrder = await ProductOrders.create({
      ProductId: productId,
      quantity,
    });

    return productOrder;
  };

  // 발주 상태 수정
  productOrderUpdate = async (productId, ProductOrderState) => {
    const productOrderState = await ProductOrders.update(
      { ProductOrderState },
      { where: { productId } }
    );

    return productOrderState;
  };

  // 발주 상태가 completed가 되었을때 상품 개수를 추가해주기 위해 발주상태 조회
  getProductQuantity = async (productId) => {
    const ProductQuantity = await ProductOrders.findOne({
      where: { productId },
    });
    return ProductQuantity;
  };

  // 상품 개수 추가
  productQuantityUpdate = async (productId, existProductQuantity) => {
    await Products.update(
      {
        quantity: sequelize.literal(
          `quantity + ${existProductQuantity.quantity}`
        ),
      },
      { where: { productId } }
    );
  };
}

module.exports = ProductOrderRepository;
