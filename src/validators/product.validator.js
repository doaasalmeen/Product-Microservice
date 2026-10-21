
import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Product name is required")
        .max(100, "Product name must not exceed 100 characters"),

    price: z
        .number()
        .int("Price must be a whole number")
        .positive("Price must be greater than 0"),

    category: z
        .string()
        .trim()
        .min(1, "Category is required")
        .max(50, "Category must not exceed 50 characters"),

    stock: z
        .number()
        .int("Stock must be a whole number")
        .nonnegative("Stock cannot be negative")
});
