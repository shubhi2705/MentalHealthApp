import React, { useState } from "react";
import { Link } from "react-router-dom";
import VirtualAssistant from "./VirtualAssistant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faUser, faClipboardCheck, faBook, faUsers, faDumbbell, faComments, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Home from "./Home";

const Dashboard = () => {
  const { t } = useTranslation();
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
      justifyContent: "center",
      alignItems: "center", 
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
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "scale(1.05)",
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
      <div style={styles.sidebar}>
        <h2>{t('dashboard.title')}</h2>
        <nav>
          {[
            { path: "/profile", title: t('dashboard.profile'), icon: faUser },
            { path: "/selfAssessment", title: t('dashboard.selfAssessment'), icon: faClipboardCheck },
            { path: "/resources", title: t('dashboard.resources'), icon: faBook },
            { path: "/workshops", title: t('dashboard.workshops'), icon: faUsers },
            { path: "/exercises", title: t('dashboard.exercises'), icon: faDumbbell },
            { path: "/counseling", title: t('dashboard.counseling'), icon: faComments },
            { path: "/emergency", title: t('dashboard.emergency'), icon: faExclamationTriangle },
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

      <div style={styles.mainContent}>
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
