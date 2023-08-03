const ProductRepository = require("../repositories/products.repository");
const ProductOrderRepository = require("../repositories/productOrders.reposirory");

class ProductOrderService {
  productRepository = new ProductRepository();
  productOrderRepository = new ProductOrderRepository();

  // 상품 발주
  productOrder = async (productId, quantity) => {
    try {
      // 상품이 존재하는지 검증하기 위해 productId로 상품 조회
      const existProduct = await this.productRepository.getProduct(productId);

      if (!existProduct) {
        return { status: 400, message: "상품이 존재하지 않습니다." };
      }
      if (!quantity || quantity <= 0) {
        return { status: 400, message: "상품의 개수를 올바르게 입력해주세요." };
      }

      await this.productOrderRepository.productOrder(productId, quantity);
      return { status: 200, message: "상품 발주가 완료되었습니다." };
    } catch (error) {
      return { status: 400, message: "상품 발주 중 오류가 발생하였습니다." };
    }
  };

  // 발주 상태 수정
  productOrderUpdate = async (productId, productOrderId, ProductOrderState) => {
    try {
      // 상품이 존재하는지 검증하기 위해 productId로 상품 조회
      const existProduct = await this.productRepository.getProduct(productId);
      // 발주 상태가 completed가 되었을때 상품 개수를 추가해주기 위해 발주상태 조회
      const existProductQuantity =
        await this.productOrderRepository.getProductQuantity(
          productId,
          productOrderId
        );
      const orderState = ["ordered", "pending", "completed", "canceled"];

      if (!existProduct) {
        return { status: 400, message: "상품이 존재하지 않습니다." };
      }
      if (
        !orderState ||
        !orderState.includes(ProductOrderState.toLowerCase())
      ) {
        return { status: 400, message: "알맞은 상태를 지정해주세요." };
      }
      if (
        ProductOrderState.toLowerCase() === "canceled" &&
        existProductQuantity.quantity > existProduct.quantity
      ) {
        return {
          status: 400,
          message:
            "현재 남은 수량이 발주 수량보다 적어 발주 취소가 불가능합니다.",
        };
      }
      if (ProductOrderState.toLowerCase() === "completed") {
        await this.productOrderRepository.productOrderUpdate(
          productId,
          productOrderId,
          ProductOrderState
        );
        await this.productOrderRepository.productQuantityUpdate(
          productId,
          existProductQuantity
        );
        return { status: 200, message: "발주 상태 수정이 완료되었습니다." };
      }

      await this.productOrderRepository.productOrderUpdate(
        productId,
        productOrderId,
        ProductOrderState
      );
      return { status: 200, message: "발주 상태 수정이 완료되었습니다." };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "발주 상태 수정 중 오류가 발생했습니다." };
    }
  };
}

module.exports = ProductOrderService;
