const { Op } = require("sequelize");
const { Products } = require("../models");

class ProductRepository {
  // 상품 전체 조회
  ALLProducts = async () => {
    // 가격이 낮은 순부터 나열해준다.
    const allProducts = await Products.findAll({
      order: [["ProductPrice", "ASC"]],
    });
    return allProducts;
  };

  // 상품 타입별 조회
  typeAllProducts = async (type) => {
    const typeProducts = await Products.findAll({
      where: { type },
      order: [["ProductPrice", "ASC"]], // 가격이 낮은 순부터 나열해준다.
    });

    return typeProducts;
  };

  // 상품 중복 예외처리를 위해 ProductName으로 조회
  findProductName = async (productName) => {
    const findProductName = await Products.findOne({ where: { productName } });
    return findProductName;
  };

  // 상품 추가
  createProduct = async (ProductName, ProductPrice, type) => {
    const createProduct = await Products.create({
      ProductName,
      ProductPrice,
      type,
    });
    return createProduct;
  };

  // 상품 존재 확인
  getProuct = async (productId) => {
    const getProuct = await Products.findOne({ where: { productId } });
    return getProuct;
  };

  // 상품 수정
  updateProduct = async (productId, ProductName, ProductPrice) => {
    const updateProduct = await Products.update(
      { ProductName, ProductPrice },
      { where: { productId } }
    );
    return updateProduct;
  };

  // 상품 삭제
  deleteProduct = async (productId) => {
    const deleteProduct = await Products.destroy({ where: { productId } });
    return deleteProduct;
  };
}

module.exports = ProductRepository;
