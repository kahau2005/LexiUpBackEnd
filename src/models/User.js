const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    full_name: { type: String, required: true },
    teacher:{
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema);