const Result = require("../model/result.model");
const Quiz = require("../model/quiz.model");

exports.submitQuiz = async (req, res) => {
    try {
        const { userId, answers } = req.body; // answers = [{ questionId, optionIndex }]
        const quiz = await Quiz.findById(req.params.quizId).populate("questions");

        if (!quiz) {
            return res.status(404).json({ message: "Quiz không tồn tại" });
        }

        let score = { oily: 0, dry: 0, combination: 0, normal: 0 };

        answers.forEach(({ questionId, optionIndex }) => {
            const question = quiz.questions.find(q => q._id.toString() === questionId);
            if (question) {
                const option = question.options[optionIndex];
                if (option) {
                    score.oily += option.scores.oily;
                    score.dry += option.scores.dry;
                    score.combination += option.scores.combination;
                    score.normal += option.scores.normal;
                }
            }
        });

        const skinType = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));

        const result = await Result.create({
            user: userId,
            quiz: req.params.quizId,
            skinType,
            score: score[skinType]
        });

        res.json({ message: "Quiz hoàn thành!", skinType, resultId: result._id });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
}