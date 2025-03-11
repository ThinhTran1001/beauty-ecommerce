const Quiz = require("../model/quiz.model");

exports.getQuestionListByQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).populate("questions");
        if (!quiz) {
            res.status(404).json({
                status: 404,
                message: "Quiz not found",
                localDate: new Date(),
            });
        }
        res.status(200).json({
            status: 200,
            message: "Successfully",
            data: quiz,
            localDate: new Date(),
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            localDate: new Date(),
        })
    }
}