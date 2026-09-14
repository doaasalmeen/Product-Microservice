const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Product Microservice is running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Product Microservice running on port ${PORT}`);
});