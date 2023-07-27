const ProductRepository = require("../repositories/products.repository");

class ProductService {
  productRepository = new ProductRepository();
  // 상품 전체 조회
  ALLProducts = async () => {
    try {
      const products = await this.productRepository.ALLProducts();

      if (products.length === 0) {
        return { status: 400, message: "조회 할 상품이 없습니다." };
      }

      return { status: 200, message: products };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "상품 전체 조회 중 오류가 발생했습니다." };
    }
  };

  // 상품 추가
  createProduct = async (name, price, type) => {
    try {
      const types = ["coffee", "juice", "dessert"];

      if (!name || !price) {
        return { status: 400, message: "상품이름과 가격을 입력해주세요." };
      }
      if (!type || !types.includes(type.toLowerCase())) {
        return { status: 400, message: "알맞은 타입으로 지정해주세요." };
      }
      await this.productRepository.createProduct(name, price, type);

      return { status: 200, message: "상품 추가가 완료되었습니다." };
    } catch (error) {
      return { status: 400, message: "상품 추가 중 오류가 발생헀습니다." };
    }
  };
}

module.exports = ProductService;
