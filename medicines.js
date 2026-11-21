const express = require('express');
const Medicine = require('../models/Medicine');
const router = express.Router();

router.get('/', async (req, res) => {
  const meds = await Medicine.find().sort({ createdAt: -1 });
  res.json(meds);
});

router.post('/', async (req, res) => {
  const med = new Medicine(req.body);
  await med.save();
  res.json(med);
});

router.put('/:id', async (req, res) => {
  await Medicine.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Updated' });
});

module.exports = router;