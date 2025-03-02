const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer_text: { type: String, required: true },
    is_correct: { type: Boolean, required: true }
});

module.exports = mongoose.model('Answer', AnswerSchema);