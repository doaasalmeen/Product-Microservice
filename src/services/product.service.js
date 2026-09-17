const products = require("../data/products");

function getAllProducts() {
    return products;
}
function getProductById(id) {
    return products.find(product => product.id === id);
}

module.exports = {
    getAllProducts,
    getProductById
};