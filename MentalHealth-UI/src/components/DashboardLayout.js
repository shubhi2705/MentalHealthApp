import React from 'react';
import './DashboardLayout.css';
import Chatbot from './Chatbot';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar for dashboard */}
      <div className="sidebar">
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* App Name */}
        <div className="app-header">
          <h1>Mental Health App</h1>
        </div>

        {/* Chatbot Section */}
        <div className="chatbot-section">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
