import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css'; // Import your CSS file for styling
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaBrain, FaHeart, FaExclamationTriangle, FaMedkit, FaComments, FaSmile, FaUsers } from 'react-icons/fa';
import LanguageSelector from "../Context/LanguageSelector";

const Home = () => {
    const { t } = useTranslation();

    const handleLearnMoreClick = () => {
        window.open('https://www.unesco.org/en/education/sustainable-development/mental-health', '_blank');
    };

    // Facts about mental health
    const facts = t('facts.items', { returnObjects: true }).map((item, index) => ({
        icon: <FaExclamationTriangle className="fact-icon" />,
        text: item
    }));

    // Common mental health issues
    const issues = t('issues.items', { returnObjects: true }).map((issue, index) => ({
        icon: <FaExclamationTriangle className="issue-icon" />,
        title: issue.title,
        description: issue.description,
        solution: issue.solution
    }));

    // Insights from UNESCO
    const unescoInsights = t('unesco.items', { returnObjects: true });

    return (
        <div className="App">
            <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div>
            <div className="container"> {/* Fixed-width container */}
                <header className="App-header">
                    <h1>{t('header.title')}</h1>
                    <p>{t('header.subtitle')}</p>
                </header>
        
                <div className="flex-container"> {/* Flex container for sections */}
                    <section className="facts flex-item">
                        <h2>{t('facts.title')}</h2>
                        {facts.map((fact, index) => (
                            <div key={index} className="fact-card">
                                {fact.icon}
                                <p>{fact.text}</p>
                            </div>
                        ))}
                    </section>
        
                    <section className="common-issues flex-item">
                        <h2>{t('issues.title')}</h2>
                        <div className="issue-list">
                            {issues.map((issue, index) => (
                                <div key={index} className="issue-card">
                                    {issue.icon}
                                    <div className="issue-content">
                                        <h3>{issue.title}</h3>
                                        <p>{issue.description}</p>
                                        <p><strong>{t('suggestedSolution')}-</strong> {issue.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="unesco-insights flex-item">
                        <h2>{t('unesco.title')}</h2>
                        {unescoInsights.map((insight, index) => (
                            <p key={index}>{insight}</p>
                        ))}
                        <button className="cta-button" onClick={handleLearnMoreClick}>
                            {t('cta')}
                        </button>
                    </section>
                </div>
        
                <footer className="App-footer">
                    <p>{t('footer.contact')}</p>
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
                    <p>{t('footer.follow')}</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
