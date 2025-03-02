const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    class_name: { type: String, required: true },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Class', ClassSchema);