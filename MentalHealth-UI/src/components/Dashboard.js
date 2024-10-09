/*import React from 'react';
import { Link } from 'react-router-dom';
import VirtualAssistant from './VirtualAssistant';

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {}
      <div style={{ width: '20%', backgroundColor: '#2C3E50', color: 'white', padding: '20px' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
          <li><Link to="/resources" style={{ color: 'white', textDecoration: 'none' }}>Explore Resources</Link></li>
          <li><Link to="/workshop" style={{ color: 'white', textDecoration: 'none' }}>Workshops</Link></li>
          <li><Link to="/counseling" style={{ color: 'white', textDecoration: 'none' }}>Counseling</Link></li>
        </ul>
      </div>

      {
      
      // Main content area with chatbot
      }
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Welcome to the Mental Health App</h2>
        <VirtualAssistant />
      </div>
    </div>
  );
}

export default Dashboard;
*/



/*

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Create a new session when the component mounts
    const createSession = async () => {
      const response = await fetch('http://localhost:5001/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setSessionId(data.sessionId);
    };
    createSession();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, sessionId }),
    });
    const data = await response.json();
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    data.forEach(msg => {
      setMessages((prev) => [...prev, { text: msg.text, isUser: false }]);
    });
    setInput('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {}
      <div className="w-1/4 bg-blue-800 text-white p-5">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <ul className="mt-5 space-y-3">
          <li>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:underline">Resources</Link>
          </li>
          <li>
            <Link to="/workshop" className="hover:underline">Workshops</Link>
          </li>
          <li>
            <Link to="/exercises" className="hover:underline">Exercises</Link>
          </li>
          <li>
            <Link to="/counseling" className="hover:underline">Counseling</Link>
          </li>
          <li>
            <Link to="/emergency" className="hover:underline">Emergency</Link>
          </li>
        </ul>
      </div>

      {}
      <div className="flex-1 p-5 flex flex-col">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Dashboard</h1>
        <div className="bg-white flex-1 p-5 rounded shadow overflow-hidden flex flex-col">
          <h2 className="text-xl font-bold mb-4">Chatbot</h2>
          <div className="border p-4 flex-1 overflow-y-auto bg-gray-50 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={msg.isUser ? 'text-right' : 'text-left'}>
                  <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={sendMessage} className="flex mt-4">
            <input
              type="text"
              className="flex-1 border rounded-l p-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r p-2 hover:bg-blue-600">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
*/



import React from "react";
import { Link } from "react-router-dom";
import VirtualAssistant from "./VirtualAssistant";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh", // Ensures full screen height
      width: "100%", // Ensures the layout fits the screen
    },
    sidebar: {
      width: "250px",
      padding: "20px",
      backgroundColor: "#003399", // Blue sidebar
      color: "#fff",
    },
    mainContent: {
      flexGrow: 1,
      padding: "20px",
      backgroundColor: "#eef6ff",
    },
    link: {
      display: "block",
      padding: "10px 0",
      color: "#fff",
      textDecoration: "none",
    },
    activeLink: {
      fontWeight: "bold",
      color: "#ffcc00",
    },
    
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Dashboard</h2>
        <nav>
          <Link to="/profile" style={styles.link}>
            Profile
          </Link>
          <Link to="/resources" style={styles.link}>
            Resources
          </Link>
          <Link to="/workshops" style={styles.link}>
            Workshops
          </Link>
          <Link to="/exercises" style={styles.link}>
            Exercises
          </Link>
          <Link to="/counseling" style={styles.link}>
            Counseling
          </Link>
          <Link to="/emergency" style={styles.link}>
            Emergency
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1>Welcome to the MindCare</h1>
        {/* Add your chatbot here */}
        <VirtualAssistant />
      </div>
    </div>
  );
};

export default Dashboard;
