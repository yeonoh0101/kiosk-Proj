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

  // 상품 타입별 조회
  typeAllProducts = async (type) => {
    try {
      const typeProduts = await this.productRepository.typeAllProducts(type);

      if (typeProduts.length === 0) {
        return {
          status: 400,
          message: "해당 타입의 상품이 존재하지 않습니다.",
        };
      }

      return { status: 200, message: typeProduts };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        message: "상품 타입별 조회 중 오류가 발생했습니다.",
      };
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

  // 상품 수정
  updateProduct = async (productId, name, price) => {
    try {
      // 상품 존재 확인
      const product = await this.productRepository.getProuct(productId);
      // 상품 수정을 위한 빈 객체 선언
      const updateProduct = {};

      if (!product) {
        return { status: 400, message: "상품이 존재하지 않습니다." };
      }
      if (!name) {
        return { status: 400, message: "상품 이름을 입력해주세요." };
      }
      if (!price || price <= 0) {
        return { status: 400, message: "알맞은 가격을 입력해주세요." };
      }

      if (name) {
        updateProduct.name = name;
      }
      if (price) {
        updateProduct.price = price;
      }

      await this.productRepository.updateProduct(productId, name, price);

      return { status: 200, message: "상품 수정이 완료되었습니다." };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "상품 수정 중 오류가 발생했습니다." };
    }
  };
}

module.exports = ProductService;
