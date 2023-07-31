const ProductService = require("../services/products.service");

class ProductController {
  productService = new ProductService();
  // 상품 전체 조회
  ALLProducts = async (req, res, next) => {
    const { status, message } = await this.productService.ALLProducts();

    res.status(status).json({ message });
  };

  // 상품 타입별 조회
  typeAllProducts = async (req, res, next) => {
    const { type } = req.params;

    const { status, message } = await this.productService.typeAllProducts(type);

    res.status(status).json({ message });
  };

  // 상품 추가
  createProduct = async (req, res, next) => {
    const { ProductName, ProductPrice, type } = req.body;
    const { userId } = res.locals.user;

    const { status, message } = await this.productService.createProduct(
      userId,
      ProductName,
      ProductPrice,
      type
    );
    res.status(status).json({ message });
  };

  // 상품 수정
  updateProduct = async (req, res, next) => {
    const { productId } = req.params;
    const { name, price } = req.body;
    const { userId } = res.locals.user;

    const { status, message } = await this.productService.updateProduct(
      userId,
      productId,
      name,
      price
    );

    res.status(status).json({ message });
  };

  // 상품 삭제 check
  checkProduct = async (req, res, next) => {
    const { productId } = req.params;
    const { userId } = res.locals.user;

    const { status, message } = await this.productService.checkProduct(
      userId,
      productId
    );

    res.status(status).json({ message });
  };

  // 확인받고 상품 삭제
  deleteProduct = async (req, res, next) => {
    const { productId, check } = req.params;
    const { userId } = res.locals.user;

    const { status, message } = await this.productService.deleteProduct(
      userId,
      productId,
      check
    );

    res.status(status).json({ message });
  };
}

module.exports = ProductController;
