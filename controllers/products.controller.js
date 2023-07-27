const ProductService = require("../services/products.service");

class ProductController {
  productService = new ProductService();
  // 상품 전체 조회
  ALLProducts = async (req, res, next) => {
    const { status, message } = await this.productService.ALLProducts();

    res.status(status).json({ message });
  };
  // 상품 추가
  createProduct = async (req, res, next) => {
    const { name, price, type } = req.body;

    const { status, message } = await this.productService.createProduct(
      name,
      price,
      type
    );
    res.status(status).json({ message });
  };
}

module.exports = ProductController;
