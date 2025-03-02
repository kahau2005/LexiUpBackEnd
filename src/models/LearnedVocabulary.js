const mongoose = require('mongoose');

const LearnedVocabularySchema = new mongoose.Schema({
    vocabulary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    first_appearance_date: { type: Date, default: Date.now },
    topic_repetition_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('LearnedVocabulary', LearnedVocabularySchema);