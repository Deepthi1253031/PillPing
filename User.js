const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  pin: { type: String, required: true },
  role: { type: String, default: 'patient' }
});
module.exports = mongoose.model('User', UserSchema);