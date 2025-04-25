import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ChatGroq } from 'langchain_groq';
import { LLMChain, PromptTemplate } from 'langchain';
import bodyParser from 'body-parser';

dotenv.config();

// Load environment variables from .env file
const groqApiKey = process.env.GROQ_API_KEY; // Use environment variable for security

// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ------------------------ Load GROQ LLM ------------------------
function loadLlm() {
    /** Load the language model (Groq API). */
    return new ChatGroq({ temperature: 0.3, model_name: "llama3-8b-8192", api_key: groqApiKey });
}

// ------------------------ Mental Health Chatbot Response Function ------------------------
async function generateResponse(userQuery) {
    /** Generate mental health support response using the LLM. */
    
    // Define the prompt for the chatbot to respond empathetically
    const promptTemplate = new PromptTemplate({
        input_variables: ["user_query"],
        template: `You are a mental health support chatbot. You must respond to the user's query with empathy, understanding, and support. If the user expresses concern about their mental well-being, offer resources or encourage them to seek professional help.

        User Query:
        {user_query}

        Your Response: in json format`
    });
    
    // Load the language model
    const llm = loadLlm();
    
    // Create the chain with the prompt and the model
    const chain = new LLMChain({ prompt: promptTemplate, llm: llm });
    
    // Get the response
    const response = await chain.run({ user_query: userQuery });
    
    return response.trim();
}

// ------------------------ Express Route for Chatbot API ------------------------
app.post('/chat', async (req, res) => {
    /** API endpoint for the chatbot to handle POST requests with user queries. */
    
    // Get the user query from the JSON body
    const userQuery = (req.body.query || '').trim();

    if (!userQuery) {
        return res.status(400).json({ error: "No query provided." });
    }
    
    // Generate a response for the user's query
    const response = await generateResponse(userQuery);

    return res.json({ response: response });
});

// ------------------------ Main Section ------------------------
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});