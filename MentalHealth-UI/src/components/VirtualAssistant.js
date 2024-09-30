// src/LiveChat.js
import React, { useState, useEffect } from 'react';

const VirtualAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const assistant = {
    name: "Assistant",
    profilePicture: "http://surl.li/bjeonj", // Assistant's profile picture
  };

  const user = {
    name: "Shubhi",
    profilePicture: "http://surl.li/gjcpby", // User's profile picture
  };

  useEffect(() => {
    // Initial greeting message
    const initialMessage = {
      sender: 'Assistant',
      text: "Hi, how are you feeling today?",
      profilePicture: assistant.profilePicture,
      name: assistant.name,
    };
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input) return;

    const newMessage = {
      sender: 'User',
      text: input,
      profilePicture: user.profilePicture,
      name: user.name,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const responseMessage = {
        sender: 'Assistant',
        text: `You said: "${input}"`,
        profilePicture: assistant.profilePicture,
        name: assistant.name,
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);

    setInput('');
  };

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #007bff',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    chatWindow: {
      height: '400px',
      overflowY: 'auto',
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #007bff',
      borderRadius: '5px',
      backgroundColor: '#e7f3ff',
    },
    message: {
      margin: '5px 0',
      display: 'flex',
      alignItems: 'center',
    },
    userMessage: {
      justifyContent: 'flex-end',
    },
    assistantMessage: {
      justifyContent: 'flex-start',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    inputContainer: {
      display: 'flex',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #007bff',
      borderRadius: '5px',
      marginRight: '10px',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', color: '#007bff' }}>Live Chat</h2>
      <div style={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(message.sender === 'User' ? styles.userMessage : styles.assistantMessage),
            }}
          >
            {message.sender === 'Assistant' && (
              <img src={message.profilePicture} alt={message.name} style={styles.profileImage} />
            )}
            <div>
              <strong>{message.name}</strong>
              <p style={{ margin: '0' }}>{message.text}</p>
            </div>
            {message.sender === 'User' && (
              <img src={message.profilePicture} alt={message.name} style={styles.profileImage} />
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default VirtualAssistant;
