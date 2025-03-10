const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const morgan = require("morgan");

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use('/auth', authRoutes);

db();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));