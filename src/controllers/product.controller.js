const getAllProducts = require("../services/product.service");

function getProducts(req, res) {
    const products = getAllProducts();

    res.status(200).json(products);
}

module.exports = getProducts ;