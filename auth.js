const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, pin, role } = req.body;
  const hashed = await bcrypt.hash(pin, 10);
  const user = new User({ username, pin: hashed, role });
  await user.save();
  res.json({ message: 'Registered Successfully' });
});

router.post('/login', async (req, res) => {
  const { username, pin } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.json({ success: false, message: 'User ledu' });
  const match = await bcrypt.compare(pin, user.pin);
  if (!match) return res.json({ success: false, message: 'Wrong PIN' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ success: true, token });
});

module.exports = router;