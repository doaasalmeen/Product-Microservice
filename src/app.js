import express from "express";
import dotenv from 'dotenv';
import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Product Microservice is running"
    });
});

app.use("/products", productRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Product Microservice running on port ${PORT}`);
});