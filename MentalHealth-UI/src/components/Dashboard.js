import React from "react";
import { Link } from "react-router-dom";
import VirtualAssistant from "./VirtualAssistant";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh", // Ensures full screen height
      width: "100%", // Ensures the layout fits the screen
      fontFamily: "'Arial', sans-serif",
    },
    sidebar: {
      width: "250px",
      padding: "20px",
      backgroundColor: "#003399", // Blue sidebar
      color: "#fff",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Added shadow for depth
    },
    mainContent: {
      flexGrow: 1,
      padding: "20px",
      backgroundColor: "#eef6ff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    link: {
      display: "block",
      padding: "10px 0",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s", // Smooth transition for hover
    },
    linkHover: {
      color: "#ffcc00",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    welcomeText: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
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
          <Link to="/selfAssessment" style={styles.link}>
            Self Assessment
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
        <h1 style={styles.header}>Welcome to MindCare</h1>
        <p style={styles.welcomeText}>
          We're here to support your mental health journey.
        </p>
        <VirtualAssistant />
      </div>
    </div>
  );
};

export default Dashboard;
