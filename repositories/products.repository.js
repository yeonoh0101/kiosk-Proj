const { Op } = require("sequelize");
const { Products } = require("../models");

class ProductRepository {
  // 상품 전체 조회
  ALLProducts = async () => {
    // 가격이 낮은 순부터 나열해준다.
    const allProducts = await Products.findAll({ order: [["price", "ASC"]] });
    return allProducts;
  };

  // 상품 타입별 조회
  typeAllProducts = async (type) => {
    const typeProducts = await Products.findAll({
      where: { type: { [Op.like]: type } },
      order: [["price", "ASC"]], // 가격이 낮은 순부터 나열해준다.
    });

    return typeProducts;
  };

  // 상품 추가
  createProduct = async (name, price, type) => {
    const createProduct = await Products.create({ name, price, type });
    return createProduct;
  };

  // 상품 존재 확인
  getProuct = async (productId) => {
    const getProuct = await Products.findOne({ where: { productId } });
    return getProuct;
  };

  // 상품 수정
  updateProduct = async (productId, name, price) => {
    const updateProduct = await Products.update(
      { name, price },
      { where: { productId } }
    );
    return updateProduct;
  };
}

module.exports = ProductRepository;
