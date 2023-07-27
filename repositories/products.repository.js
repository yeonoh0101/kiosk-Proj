const { Products } = require("../models");

class ProductRepository {
  // 상품 전체 조회
  ALLProducts = async () => {
    // 전체 조회하면서 가격이 낮은 순부터 나열해준다.
    const allProducts = await Products.findAll({ order: [["price", "ASC"]] });

    return allProducts;
  };

  // 상품 추가
  createProduct = async (name, price, type) => {
    const createProduct = await Products.create({ name, price, type });

    return createProduct;
  };
}

module.exports = ProductRepository;
