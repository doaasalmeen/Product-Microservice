const products = require("../data/products");

function getAllProducts() {
    return products;
}
function getProductById(id) {
    return products.find(product => product.id === id);
}
function createProduct(data) {
    const newProduct = {
        id: products.length + 1,
        name: data.name,
        price: data.price,
        category: data.category,
        stock: data.stock
    };

    products.push(newProduct);

    return newProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};