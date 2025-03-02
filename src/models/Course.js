const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: { type: String, required: true },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
    tests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }],
    overall_scores: [{
        student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
        score: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Course', CourseSchema);