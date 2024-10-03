const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blockchainWalletAddress: { type: String, unique: true },
    privateKey: { type: String, required: true }, // Store encrypted
    score: { type: Number, default: 0 },
    enabled: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;