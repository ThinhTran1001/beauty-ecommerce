const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const morgan = require("morgan");

const {authMiddleware} = require("./middleware/auth.middleware");

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use('/auth', authRoutes);
app.use('/products', authMiddleware, productRoutes);

db();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));