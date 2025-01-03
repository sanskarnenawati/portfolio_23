import React, { useState } from 'react';
import '../css/ChatBot.css';  // Import the CSS for styling

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! I\'m your chatbot. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await fetch('https://sanskarchatbot.onrender.com/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            setMessages([...newMessages, { sender: 'bot', text: data.response }]);
        } catch (error) {
            setMessages([...newMessages, { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' }]);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                Chat Bot For Sanskar
            </div>
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chat-input"
                    placeholder="Type your message here..."
                />
            </form>
        </div>
    );
};

export default ChatBot;
