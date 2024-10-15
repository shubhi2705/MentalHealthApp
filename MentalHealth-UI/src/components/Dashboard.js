import React, { useState } from "react";
import { Link } from "react-router-dom";
import VirtualAssistant from "./VirtualAssistant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardCheck, faBook, faUsers, faDumbbell, faComments, faExclamationTriangle, faPeace } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      fontFamily: "'Arial', sans-serif",
    },
    sidebar: {
      width: "250px",
      padding: "20px",
      backgroundColor: "#003399",
      color: "#fff",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
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
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s, background-color 0.3s, transform 0.3s",
      borderRadius: "4px",
      position: "relative",
    },
    linkHover: {
      color: "#ffcc00",
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background on hover
      transform: "scale(1.05)", // Slightly enlarge the link
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
    icon: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Dashboard</h2>
        <nav>
          {[
            { path: "/profile", title: "Profile", icon: faUser },
            { path: "/selfAssessment", title: "Self Assessment", icon: faClipboardCheck },
            { path: "/resources", title: "Resources", icon: faBook },
            { path: "/workshops", title: "Workshops", icon: faUsers },
            { path: "/exercises", title: "Exercises", icon: faDumbbell },
            { path: "/counseling", title: "Counseling", icon: faComments },
            { path: "/emergency", title: "Emergency", icon: faExclamationTriangle },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{
                ...styles.link,
                ...(hoveredLink === index ? styles.linkHover : {})
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <FontAwesomeIcon icon={link.icon} style={styles.icon} />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.header}>
          <FontAwesomeIcon icon={faPeace} style={{ marginRight: '10px', color: 'white', zIndex: 1 }} />
          Welcome to YouMatter
        </h1>
        <p style={styles.welcomeText}>
          We're here to support your mental health journey.
        </p>  <VirtualAssistant />
      </div>
    </div>
  );
};

export default Dashboard;
