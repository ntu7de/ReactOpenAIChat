import '../styles/Chat.css';
import axios from 'axios';
import { useState } from 'react';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{role: 'system', content: 'You are a helpful assistant.'}]);
    const [model, setModel] = useState('gpt-3.5-turbo');
    // const [body, setBody] = useState({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'system', content: 'You are a helpful assistant.'}]
    // })

    const sendMessage = async (message) => {
        // Create it in the way that is accepted by OpenAI
        const newMessage = {
            role: 'user',
            content: message
        }
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);

        try {
            const response = await axios.post('http://localhost:8000/get-response', {
                messages: updatedMessages,
                model: model
            });

            const assistantResponse = response.data;
            console.log(assistantResponse);
            setMessages((prevMessage) => [...prevMessage, assistantResponse]);
        } catch (error) {
            console.log('Error fetching response: ', error);
        }
    }

    const handleSubmit = async (body) => {
        e.preventDefault(); // Prevents website from refreshing after submitting a form
        sendMessage(message);
        setMessage('');
    }

    return (
        <>
            {messages.map((msg, index) => {
                <div key={index}>
                    {msg.role === 'user' ? <h2>You: </h2> : <h2>Assistant: </h2>}
                </div>
            })}
            <form onSubmit={handleSubmit}>
                <input type='text' 
                    className='chat-input'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Chat