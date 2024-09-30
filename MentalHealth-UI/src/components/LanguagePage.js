import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LanguagePage() {
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  const handleLanguageSelection = () => {
    navigate('/greeting', { state: { language } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-yellow-600">
      <h1 className="text-4xl font-bold text-white mb-6">Select Your Preferred Language</h1>
      <p className="text-white mb-8 text-center max-w-lg">
        MindCare supports multiple languages to help you feel more comfortable and connected. 
        Please select your preferred language for a more personalized experience.
      </p>
      <select
        className="mb-6 p-3 w-64 rounded-lg shadow-lg text-xl"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Hindi">Hindi</option>
        <option value="Mandarin">Mandarin</option>
      </select>
      <button
        className="bg-white text-orange-600 px-8 py-3 rounded-lg shadow-lg text-lg hover:bg-orange-50"
        onClick={handleLanguageSelection}
      >
        Continue
      </button>
    </div>
  );
}

export default LanguagePage;
