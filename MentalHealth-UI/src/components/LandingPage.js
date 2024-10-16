// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUserMd, faBook, faHandsHelping, faUserPlus, faSignInAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { useLanguage } from '../Context/LanguageContext'; // Import the LanguageContext
import LanguageSelector from "../Context/LanguageSelector";
function LandingPage() {
    const { t } = useTranslation();
    const { changeLanguage } = useLanguage(); // Access the changeLanguage function

    const handleLanguageChange = (lang) => {
        changeLanguage(lang); // Use the context's changeLanguage function
    };

    const services = [
        {
            title: t('service1_title'),
            description: t('service1_desc'),
            link: "/liveChat",
            icon: faComments,
        },
        {
            title: t('service2_title'),
            description: t('service2_desc'),
            link: "/counselor",
            icon: faUserMd,
        },
        {
            title: t('service3_title'),
            description: t('service3_desc'),
            link: "/resources",
            icon: faBook,
        },
        {
            title: t('service4_title'),
            description: t('service4_desc'),
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
                        <FontAwesomeIcon icon={faUserPlus} className="mr-1 text-white" /> {t('register')}
                    </Link>
                    <Link to="/signin" className="nav-link text-white hover:text-gray-300 transition duration-300">
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-1 text-white" /> {t('signIn')}
                    </Link>
                    <LanguageSelector />
                    {/* <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div> */}
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {t('changeLanguage')}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('es')}>Spanish</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('zh')}>Chinese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('fr')}>French</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('de')}>German</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('hi')}>Hindi</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('ko')}>Korean</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange('ja')}>Japanese</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <FontAwesomeIcon icon={faLanguage} className="text-white ml-2" />
                </div>
            </nav>

            <div className="flex flex-col items-center justify-center pt-20 px-4">
                <h1 className="text-6xl font-extrabold text-blue-800 mb-6 animate__animated animate__fadeIn w-full text-center">YouMatter</h1>
                <p className="text-lg text-gray-800 mb-10 max-w-2xl text-center animate__animated animate__fadeIn animate__delay-1s">
                    {t('intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={service.icon} className="text-blue-700 text-3xl mr-2" />
                                <h2 className="text-2xl font-bold text-blue-700">{service.title}</h2>
                            </div>
                            <p className="text-gray-700 mb-4">{service.description}</p>
                            <Link to={service.link} className="text-blue-700 hover:text-blue-500 font-semibold underline">{t('learn_more')}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
