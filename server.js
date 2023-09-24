const express = require('express');
const axios = require('axios');
console.log('here')
const app = express();
app.use(express.json());

app.post('/generate-response', async (req, res) => {
  const userInput = req.body.input; // Assuming your form sends 'input' as the user input

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'gpt-3.5-turbo', // Use ChatGPT 3.5 Turbo
      messages: [{ role: 'system', content: 'You are a UX designer.' }, { role: 'user', content: userInput }],
    }, {
      headers: {
        'Authorization': 'Bearer sk-uW5B3tNbJh8UcTTP3bdfT3BlbkFJtCBi4KIaEzSkrs4wVQJvY' // Replace with your actual OpenAI API key
      }
    });

    const aiResponse = response.data.choices[0].message.content;+
    res.json({ response: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
