const openai = require('openai');

// Initialize OpenAI client with your API key
const apiKey = process.env.OPENAI_API_KEY;
const client = new openai(apiKey);

exports.generateBusinessPlan = async (req, res) => {
    try {
        // Extract user responses from request body
        const { form1Response, form2Response, form3Response } = req.body;

        // Call OpenAI API to generate business plan based on user responses
        const response = await client.complete({
            engine: 'text-davinci-002',
            prompt: `Form 1 Response: ${form1Response}\nForm 2 Response: ${form2Response}\nForm 3 Response: ${form3Response}`,
            max_tokens: 500, // Adjust max_tokens as needed
        });

        // Send generated business plan back to client
        res.json({ businessPlan: response.data.choices[0].text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

