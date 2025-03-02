const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    created_courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = UserSchema.discriminator('Teacher', TeacherSchema);