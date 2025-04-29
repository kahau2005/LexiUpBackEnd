const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: { type: String, required: true },
    owner: {type: mongoose.Schema.Types.ObjectId, required: true},
    members: [{type: mongoose.Schema.Types.ObjectId}],
    topics: [{type: mongoose.Schema.Types.ObjectId}],
    exercises: [{type: mongoose.Schema.Types.ObjectId}],
}, { timestamps: true })

module.exports = mongoose.model('Course', CourseSchema);