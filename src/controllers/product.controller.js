import * as productService from "../services/product.service.js";

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
        const id = Number(req.params.id);

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
        const { name, price, category, stock } = req.body;

        if (
            !name ||
            price === undefined ||
            !category ||
            stock === undefined
        ) {
            return res.status(400).json({
                message: "name, price, category and stock are required"
            });
        }

        const product = await productService.createProduct({
            name,
            price,
            category,
            stock
        });

        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
}
export async function updateProduct(req, res) {
    try {
        const id = Number(req.params.id);

        const { name, price, category, stock } = req.body;

        const product = await productService.updateProduct(id, {
            name,
            price,
            category,
            stock
        });

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
export async function deleteProduct(req, res) {
     try {
        const id = Number(req.params.id);

        const product = await productService.deleteProduct(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
