const { Products, ProductOrders, sequelize } = require("../models");
const Sequelize = require("sequelize");

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
  productOrderUpdate = async (productId, productOrderId, ProductOrderState) => {
    try {
      const transaction = await sequelize.transaction();

      const productOrderState = await ProductOrders.update(
        { ProductOrderState },
        { where: { productId, productOrderId } },
        { transaction }
      );

      await transaction.commit();
      return productOrderState;
    } catch (error) {
      await transaction.rollback();
    }
  };

  // 발주 상태가 completed가 되었을때 상품 개수를 추가해주기 위해 발주상태 조회
  getProductQuantity = async (productId, productOrderId) => {
    const ProductQuantity = await ProductOrders.findOne({
      where: { productId, productOrderId },
    });
    return ProductQuantity;
  };

  // 상품 개수 추가
  productQuantityUpdate = async (productId, existProductQuantity) => {
    try {
      const transaction = await sequelize.transaction();

      await Products.update(
        {
          quantity: Sequelize.literal(
            `quantity + ${existProductQuantity.quantity}`
          ),
        },
        { where: { productId } },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  };

  // 상품 개수 삭제
  productQuantityDel = async (productId, existProductQuantity) => {
    try {
      const transaction = await sequelize.transaction();

      console.log(existProductQuantity.quantity);
      await Products.update(
        {
          quantity: Sequelize.literal(
            `quantity - ${existProductQuantity.quantity}`
          ),
        },
        { where: { productId } },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  };
}

module.exports = ProductOrderRepository;
