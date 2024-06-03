// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/get-response', function(req, res) {
    try {
        async function main() {
            const completion = await openai.chat.completions.create({
                messages: [{role: "system", content: "You are a helpful assistant." }],
                model: 'gpt-3.5-turbo',
            });
        
            console.log(completion.choices[0]);
        }
        main();
    } catch (e) {
        res.status(400).send('Error fetching response: ', e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());