

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Voice input setup

const VirtualAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/"); // Redirect to home
  };
  const assistant = {
    name: "Assistant",
    profilePicture: "http://surl.li/bjeonj", // Assistant's profile picture
  };

  const user = {
    name: "User",
    profilePicture: "http://surl.li/gjcpby", // User's profile picture
  };

  useEffect(() => {
    // Initial greeting message
    const initialMessage = {
      sender: "Assistant",
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
      sender: "User",
      text: input,
      profilePicture: user.profilePicture,
      name: user.name,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const responseMessage = {
        sender: "Assistant",
        text: `You said: "${input}"`,
        profilePicture: assistant.profilePicture,
        name: assistant.name,
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);

    setInput("");
  };
  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

  const startListening = () => {
    recognition.start();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInput(transcript);
  };

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #007bff",
      borderRadius: "10px",
      backgroundColor: "#f1f7fc",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    chatWindow: {
      height: "400px",
      overflowY: "auto",
      marginBottom: "10px",
      padding: "20px",
      border: "1px solid #007bff",
      borderRadius: "10px",
      backgroundColor: "#eef6ff",
    },
    message: {
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    userMessage: {
      justifyContent: "flex-end",
    },
    assistantMessage: {
      justifyContent: "flex-start",
    },
    profileImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "12px",
      border: "2px solid #007bff",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
    },
    voiceButton: {
      backgroundColor: "#28a745",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
       <button 
        onClick={handleBackToHome} 
        className="absolute  bg-transparent text-blue-600 focus:outline-none hover:text-blue-800 transition"
        >
        Back to Home
      </button>
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Live Chat</h2>
      <div style={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(message.sender === "User"
                ? styles.userMessage
                : styles.assistantMessage),
            }}
          >
            {message.sender === "Assistant" && (
              <img
                src={message.profilePicture}
                alt={message.name}
                style={styles.profileImage}
              />
            )}
            <div>
              <strong>{message.name}</strong>
              <p style={{ margin: "0" }}>{message.text}</p>
            </div>
            {message.sender === "User" && (
              <img
                src={message.profilePicture}
                alt={message.name}
                style={styles.profileImage}
              />
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
        <button type="submit" style={styles.button}>
          Send
        </button>
        <button
          type="button"
          style={styles.voiceButton}
          onClick={startListening}
        >
          🎙️ Voice Input
        </button>
      </form>
    </div>
  );
};

export default VirtualAssistant;
