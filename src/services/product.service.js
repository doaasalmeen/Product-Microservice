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
function updateProduct(id, data) {
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        id,
        name: data.name,
        price: data.price,
        category: data.category,
        stock: data.stock
    };

    return products[index];
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct
};