import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUserMd, faBook, faHandsHelping, faUserPlus, faSignInAlt, faLanguage, faBrain } from '@fortawesome/free-solid-svg-icons'; // Import faBrain
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';



function LandingPage() {


  
    const { t, i18n } = useTranslation();
  
    const handleLanguageChange = (lang) => {
      i18n.changeLanguage(lang);
    };

  const services = [
    {
      title: "AI Chat Support",
      description: "Our chatbot, powered by IBM Watson, provides real-time mental health assistance, offering personalized insights and resources to help manage stress, anxiety, and more.",
      link: "/liveChat",
      icon: faComments,
    },
    {
      title: "Contact a Counselor",
      description: "Connect directly with a licensed mental health counselor through video or chat sessions. Confidential and supportive therapy at your fingertips.",
      link: "/counselor",
      icon: faUserMd,
    },
    {
      title: "Self-Help Resources",
      description: "Explore our library of mental health resources, guided exercises, and tools like mood tracking and relaxation techniques to help you manage daily challenges.",
      link: "/resources",
      icon: faBook,
    },
    {
      title: "Emergency Crisis Support",
      description: "Access immediate help during a mental health crisis. We provide direct links to local emergency services and hotline numbers tailored to your region.",
      link: "/emergency",
      icon: faHandsHelping,
    },
  ];
  
  
  return (
    <div className="app">
      <nav className="navbar flex p-2 bg-darkblue fixed w-full z-20">
        <div className="navbar-brand text-white text-3xl font-extrabold flex items-center ml-3">
          YouMatter
        </div>
        <div className="navbar-options flex items-center space-x-4">
          <Link to="/signup" className="nav-link text-white hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1 text-white" /> Register
          </Link>
          <Link to="/signin" className="nav-link text-white hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1 text-white" /> Sign In
          </Link>


          <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Change Language
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLanguageChange('es')}>Spanish</Dropdown.Item>
          {/* Add more languages as needed */}
        </Dropdown.Menu>
      </Dropdown>

     


          <FontAwesomeIcon icon={faLanguage} className="text-white ml-2" />
        </div>
      </nav>


      <div className="flex flex-col items-center justify-center pt-20 px-4">
        <h1 className="text-6xl font-extrabold text-blue-800 mb-6 animate__animated animate__fadeIn w-full text-center">YouMatter</h1>
        <p className="text-lg text-gray-800 mb-10 max-w-2xl text-center animate__animated animate__fadeIn animate__delay-1s">
          Your mental health matters, no matter where you are. YouMatter offers personalized mental health support for remote and rural communities. Get access to self-help tools, AI-powered chat support, and live connections to mental health professionals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-blue-700 text-3xl mr-2" />
                <h2 className="text-2xl font-bold text-blue-700">{service.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link to={service.link} className="text-blue-700 hover:text-blue-500 font-semibold underline">Learn More</Link>
            </div>
            
          ))}
        </div>
        <div >
      <h2>{t('service1')}</h2>
        <p>{t('service1_desc')}</p>

        <h2>{t('service2')}</h2>
        <p>{t('service2_desc')}</p>
      </div>
      
      </div>
    </div>
  );
}

export default LandingPage;
