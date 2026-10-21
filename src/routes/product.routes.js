import express from "express";

import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js";
import { validate } from "../middleware/validate.js";
import { productSchema } from "../validators/product.validator.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validate(productSchema), createProduct);
router.put("/:id", validate(productSchema) , updateProduct);
router.delete("/:id", deleteProduct);

export default router;