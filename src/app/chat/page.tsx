"use client"
import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface YourDataItemType {
 
  id: number;
  name: string;
  text: string;

}

const COHERE_API_BASE_URL = 'https://api.cohere.ai';
const COHERE_API_KEY = 'qx8l2aM3MhcEtWdV9En5hYDqQIs1Yj8IDo7L229X';

const cohereApi = axios.create({
  baseURL: COHERE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${COHERE_API_KEY}`,
  },
});




const ChatComponent = () => {
  const [messages, setMessages] = useState<YourDataItemType[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const sendMessage = async () => {
    try {
      const response = await cohereApi.post('/v1/chat', {
        message: inputMessage,
      });

      const newMessages = [...messages, response.data];
      setMessages(newMessages);
      console.log(newMessages)
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Fetch initial chat messages or perform any necessary setup
    // ...

    // For example:
    //cohereApi.get('/chat/messages').then(response => setMessages(response.data));
  }, []);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
