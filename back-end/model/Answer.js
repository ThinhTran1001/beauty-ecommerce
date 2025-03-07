const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người thực hiện bài test
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true }, // Bài test được làm
    answers: [
        {
            question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true }, // Câu hỏi
            selectedOption: { type: String, required: true } // Đáp án đã chọn
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Answer", AnswerSchema);
