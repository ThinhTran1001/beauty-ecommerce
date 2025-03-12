const express = require("express");
const {getQuizWithQuestion} = require("../controller/quiz.controller");
const {authMiddleware, userAuthorities} = require("../middleware/auth.middleware");


const router = express.Router();

router.get("/questions", authMiddleware, userAuthorities, getQuizWithQuestion);

module.exports = router;