const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    test_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
    question_text: { type: String, required: true },
    question_type: { type: String, enum: ['card', 'fill_in_the_blank'], required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});

module.exports = mongoose.model('Question', QuestionSchema);