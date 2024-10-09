import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import axios from 'axios';

const LanguageSwitcher = () => {
  const { changeLanguage } = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = async () => {
    if (selectedLanguage) {
      try {
        await changeLanguage(selectedLanguage);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
  };

  return (
    <div style={{ position: 'fixed', top: 20, left: 20 }}>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">Select Language</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleLanguageChange}>Switch Language</button>
    </div>
  );
};

export default LanguageSwitcher;
