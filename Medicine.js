const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dose: String,
  time: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Medicine', MedicineSchema);