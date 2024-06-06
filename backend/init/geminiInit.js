const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize the generative model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

module.exports = model;
