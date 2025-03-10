const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String }, // Mô tả
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Quiz", QuizSchema);
