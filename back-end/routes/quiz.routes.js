const express = require("express");
const {getQuestionListByQuiz} = require("../controller/quiz.controller");


const router = express.Router();

router.get("/:id/questions", getQuestionListByQuiz);

module.exports = router;