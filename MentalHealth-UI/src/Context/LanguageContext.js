// src/components/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import i18n from '../components/i18n'; // Assume you have i18n set up with your translations

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Update the language in i18n
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
