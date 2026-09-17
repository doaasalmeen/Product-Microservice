const productsServices = require("../services/product.service");

function getProducts(req, res) {
    const products = productsServices.getAllProducts();

    res.status(200).json(products);
}
function getProduct(req, res) {
    const id = Number(req.params.id);

    const product = productsServices.getProductById(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
}

module.exports = {
    getProducts,
    getProduct
};