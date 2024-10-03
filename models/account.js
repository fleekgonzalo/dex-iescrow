const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    CBU: { type: String, required: true, unique: true },
    alias: { type: String, required: true },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;