import { eq } from "drizzle-orm";

import { db } from "../db/index.js";
import { products } from "../db/schema.js";

export async function getAllProducts() {
    return await db.select().from(products);
}
export async function getProductById(id) {
    const result = await db
        .select()
        .from(products)
        .where(eq(products.id, id));

    return result[0];
}
export async function createProduct(data) {
    const result = await db
        .insert(products)
        .values({
            name: data.name,
            price: data.price,
            category: data.category,
            stock: data.stock
        })
        .returning();

    return result[0];
}
export async function updateProduct(id, data) {
    const result = await db
        .update(products)
        .set({
            name: data.name,
            price: data.price,
            category: data.category,
            stock: data.stock
        })
        .where(eq(products.id, id))
        .returning();
    
    return result[0];
}
export async function deleteProduct(id) {
    const result = await db
        .delete(products)
        .where(eq(products.id, id))
        .returning();
    
    return result[0];
}
