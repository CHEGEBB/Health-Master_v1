const model = require('../init/geminiInit'); // Import the model

// Controller function for generating text from text-only input
exports.generateText = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text(); // Await the result of response.text()
        res.json(text); // Send the text directly
    } catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

// Controller function for generating text from text-and-image input (multimodal)
exports.generateTextAndImage = async (req, res) => {
    try {
        const { prompt, imageParts } = req.body;
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = await response.text(); // Await the result of response.text()
        res.json(text); // Send the text directly
    } catch (error) {
        console.error('Error generating text from text and image:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
