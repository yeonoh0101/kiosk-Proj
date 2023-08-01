const ProductRepository = require("../repositories/products.repository");
const ProductOrderRepository = require("../repositories/productOrders.reposirory");

class ProductOrderService {
  productRepository = new ProductRepository();
  productOrderRepository = new ProductOrderRepository();

  // 상품 발주
  ProductOrder = async (productId, quantity) => {
    try {
      // 상품이 존재하는지 검증하기 위해 productId로 상품 조회
      const existProduct = await this.productRepository.getProduct(productId);

      if (!existProduct) {
        return { status: 400, message: "상품이 존재하지 않습니다." };
      }
      if (!quantity || quantity <= 0) {
        return { status: 400, message: "상품의 개수를 올바르게 입력해주세요." };
      }

      await this.productOrderRepository.ProductOrder(productId, quantity);
      return { status: 200, message: "상품 발주가 완료되었습니다." };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "상품 발주 중 오류가 발생하였습니다." };
    }
  };
}

module.exports = ProductOrderService;
