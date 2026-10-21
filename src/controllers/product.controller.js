
import * as productService from "../services/product.service.js";

function parseProductId(value) {
    const id = Number(value);

    if (!Number.isSafeInteger(id) || id <= 0) {
        return null;
    }

    return id;
}

export async function getProducts(req, res, next) {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export async function getProduct(req, res, next) {
    try {
        const id = parseProductId(req.params.id);

        if (id === null) {
            return res.status(400).json({
                message: "Product ID must be a positive integer"
            });
        }

        const product = await productService.getProductById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req, res, next) {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req, res, next) {
    try {
        const id = parseProductId(req.params.id);

        if (id === null) {
            return res.status(400).json({
                message: "Product ID must be a positive integer"
            });
        }

        const product = await productService.updateProduct(id, req.body);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export async function deleteProduct(req, res, next) {
    try {
        const id = parseProductId(req.params.id);

        if (id === null) {
            return res.status(400).json({
                message: "Product ID must be a positive integer"
            });
        }

        const product = await productService.deleteProduct(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            product
        });
    } catch (error) {
        next(error);
    }
}
