const mongoose = require('mongoose');

const VocabularySchema = new mongoose.Schema({
    word: { type: String, required: true },
    level: { type: String, enum: ['easy', 'normal', 'hard'], required: false }
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);