const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    topic_name: { type: String, required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    vocabulary_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' }]
});

module.exports = mongoose.model('Topic', TopicSchema);