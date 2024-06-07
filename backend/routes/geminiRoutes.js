const express = require('express');
const router = express.Router();
const geminiController = require('../controllers/geminiController');

// Route for generating text from text-only input
router.post('/generateText', geminiController.generateText);

// Route for generating text from text-and-image input (multimodal)
router.post('/generateTextAndImage', geminiController.generateTextAndImage);

module.exports = router;
