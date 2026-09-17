const express = require("express");
const dotenv = require("dotenv");

const productRoutes = require("./routes/product.routes");
const errorHandler = require("./middleware/errorHandler");
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