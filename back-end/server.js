const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const reviewRoutes = require("./routes/review.routes");
const userRoutes = require("./routes/user.routes");
const quizRoutes = require("./routes/quiz.routes");
const questionRoutes = require("./routes/question.routes");

const morgan = require("morgan");

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/reviews',reviewRoutes );
app.use('/users', userRoutes);
app.use('/quiz', quizRoutes);
app.use('/questions', questionRoutes);

db();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));