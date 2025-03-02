const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date },
    devices: [{
        device_name: { type: String, required: true },
        cookie: { type: String, required: true }
    }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    learned_vocabulary: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LearnedVocabulary' }],
    daily_learned_count: {
        count: { type: Number, default: 0 },
        last_updated: { type: Date, default: Date.now }
    },
    notifications: [{
        notification_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        from: { type: String, enum: ['system', 'teacher'], required: true },
        date: { type: Date, default: Date.now },
        is_read: { type: Boolean, default: false }
    }],
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = UserSchema.discriminator('Student', StudentSchema);