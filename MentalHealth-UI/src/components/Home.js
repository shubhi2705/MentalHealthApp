import React from 'react';
import './Home.css'; // Import your CSS file for styling
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaBrain, FaHeart, FaExclamationTriangle, FaMedkit } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="App">
          <div className="container"> {/* Fixed-width container */}
            <header className="App-header">
              <h1>Your Mental Health Matters</h1>
              <p>Explore, Understand, and Improve Your Mental Well-Being.</p>
            </header>
        
            <section className="facts">
              <h2>Did You Know?</h2>
              <div className="fact-card">
                <FaExclamationTriangle className="fact-icon" />
                <p>1 in 4 people will experience a mental health problem in their lifetime.</p>
              </div>
              <div className="fact-card">
                <FaBrain className="fact-icon" />
                <p>Mental health issues are among the leading causes of disability worldwide.</p>
              </div>
              <div className="fact-card">
                <FaHeart className="fact-icon" />
                <p>Early intervention can significantly improve outcomes for mental health disorders.</p>
              </div>
            </section>
        
            <section className="common-issues">
    <h2>Common Mental Health Issues</h2>
    <div className="issue-list">
        <div className="issue-card">
            <FaExclamationTriangle className="issue-icon" />
            <div className="issue-content">
                <h3>Anxiety Disorders</h3>
                <p>Characterized by excessive fear or anxiety.</p>
                <p>Suggested Solution: Practice mindfulness and seek therapy.</p>
            </div>
        </div>
        <div className="issue-card">
            <FaHeart className="issue-icon" />
            <div className="issue-content">
                <h3>Depression</h3>
                <p>A mood disorder that affects how you feel.</p>
                <p>Suggested Solution: Regular exercise and professional help.</p>
            </div>
        </div>
        <div className="issue-card">
            <FaMedkit className="issue-icon" />
            <div className="issue-content">
                <h3>Stress</h3>
                <p>The body’s reaction to a challenge or demand.</p>
                <p>Suggested Solution: Relaxation techniques and time management.</p>
            </div>
        </div>
    </div>
</section>

        
            <section className="unesco-insights">
              <h2>Insights from UNESCO</h2>
              <p>Globally, mental health problems are on the rise, with an estimated 264 million people suffering from depression.</p>
              <p>Lack of mental health services contributes to stigma and discrimination.</p>
              <button className="cta-button">Learn More About Mental Health Resources</button>
            </section>
        
            <footer className="App-footer">
              <p>Contact Us: info@mentalhealthapp.com</p>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <p>Follow us on social media</p>
            </footer>
          </div>
        </div>
    );
};

export default Home;
