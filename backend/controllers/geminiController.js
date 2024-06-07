const model = require('../init/geminiInit'); // Import the model

// Controller function for generating text from text-only input
exports.generateText = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ text });
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
        const text = response.text();
        res.json({ text });
    } catch (error) {
        console.error('Error generating text from text and image:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};


// Function to filter prompts
function filterPrompt(prompt, filterWords, placeholder = '[FILTERED]') {
    // Create a regular expression pattern to match filtered words
    const pattern = new RegExp('\\b(' + filterWords.join('|') + ')\\b', 'gi');

    // Replace filtered words with placeholder
    return prompt.replace(pattern, placeholder);
}

// Function to extract diseases from the generated text
function extractDiseases(text) {
    // List of common diseases
    const diseases = ['Malaria', 'Meningitis', 'Encephalitis', 'COVID-19', 'Influenza', 'Cancer', 'Heart disease', 'Stroke', 'Diabetes', 'Hypertension', 'Arthritis', 'Asthma', 'Alzheimer\'s disease', 'Chronic obstructive pulmonary disease', 'Tuberculosis', 'HIV/AIDS', 'Hepatitis', 'Malaria', 'Dengue fever', 'Yellow fever', 'Typhoid fever', 'Cholera', 'Ebola', 'Zika virus', 'Lyme disease', 'West Nile virus', 'Measles', 'Rubella', 'Mumps', 'Polio', 'Rabies', 'Tetanus', 'Varicella', 'Pneumonia', 'Bronchitis', 'Gastritis', 'Ulcer', 'Appendicitis', 'Diverticulitis', 'Colitis', 'Gallstones', 'Kidney stones', 'Pancreatitis', 'Cirrhosis', 'Celiac disease', 'Crohn\'s disease', 'Gout', 'Multiple sclerosis', 'Parkinson\'s disease', 'Epilepsy', 'Schizophrenia', 'Bipolar disorder', 'Depression', 'Anxiety', 'Post-traumatic stress disorder', 'Obsessive-compulsive disorder'];

    // Regular expression pattern to match disease names
    const diseaseRegex = new RegExp('\\b(' + diseases.join('|') + ')\\b', 'gi');

    // Extract diseases from text using the regex
    const extractedDiseases = text.match(diseaseRegex);

    // Remove duplicates
    return [...new Set(extractedDiseases)];
}

const prompt = "This is a prompt mentioning Malaria, COVID-19, and Diabetes.";
const filteredPrompt = filterPrompt(prompt, ['COVID-19', 'Diabetes']);
console.log("Filtered Prompt:", filteredPrompt);

const text = "The patient was diagnosed with Malaria and Encephalitis.";
const diseases = extractDiseases(text);
console.log("Extracted Diseases:", diseases);

