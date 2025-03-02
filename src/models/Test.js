const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    test_name: { type: String, required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    student_scores: [{
        student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
        score: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Test', TestSchema);