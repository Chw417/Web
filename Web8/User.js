const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        match: [/^[a-zA-Z\s]+$/, "Full name should contain only alphabetic characters."]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@northeastern\.edu$/, "Email must be a valid Northeastern email."]
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String // Stores the file path
    }
});

module.exports = mongoose.model('User', UserSchema);
