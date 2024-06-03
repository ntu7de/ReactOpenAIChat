// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8000;

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get('/hello-world', async (req, res) => {
    try {
        console.log('Hello world');
        res.status(200);
    } catch (e) {
        res.status(400).send(e);
    }
}) 

app.post('/get-response', async (req, res) => {
    const model = req.body.model;
    const messages = req.body.messages;
    
    try {
        const response = await openai.chat.completions.create({
            messages: messages,
            model: model,
        });

        res.status(200).json(response.choices[0]);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.use(cors());

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});