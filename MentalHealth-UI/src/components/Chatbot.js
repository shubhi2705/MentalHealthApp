import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Chatbot() {
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const handleBackToHome = () => {
    navigate("/"); // Redirect to home
  };

  useEffect(() => {
    // Create session when component mounts
    axios.post('http://localhost:5000/api/server/message', {})
      .then(res => {
        setSessionId(res.data.sessionId);
      })
      .catch(err => {
        console.error('Failed to create session', err);
      });
  }, []);

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);

    axios.post('http://localhost:5000/api/server/message', {
      message: input,
      sessionId: sessionId,
    })
      .then(res => {
        const responseMessages = res.data.map(item => ({ from: 'bot', text: item.text }));
        setMessages(prevMessages => [...prevMessages, ...responseMessages]);
      })
      .catch(err => {
        console.error('Failed to send message', err);
      });

    setInput('');
  };

  return (
    <div className="chatbot" style={{ border: '1px solid #ccc', padding: '10px', width: '300px', backgroundColor: 'white' }}>
       <button 
        onClick={handleBackToHome} 
        className="absolute  bg-transparent text-blue-600 px-4 py-2 focus:outline-none hover:text-blue-800 transition"
        >
        Back to Home
      </button>
      <div className="messages" style={{ height: '200px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <strong>{msg.from === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
        style={{ width: '100%', padding: '5px' }}
      />
      <button onClick={sendMessage} style={{ marginTop: '5px', width: '100%' }}>Send</button>
    </div>
  );
}

export default Chatbot;
