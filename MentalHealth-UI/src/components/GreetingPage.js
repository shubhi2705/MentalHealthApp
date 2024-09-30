import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function GreetingPage() {
  const location = useLocation();
  const { language } = location.state || { language: 'English' };
  const navigate = useNavigate();
  const greetings = {
    English: 'Hello',
    Spanish: 'Hola',
    French: 'Bonjour',
    Hindi: 'Namaste',
    Mandarin: 'Nǐ hǎo',
  };
  const showAssessmentPage = () => {
    navigate('/selfAssessment');
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center w-96">
        <h1 className="text-5xl font-bold mb-4">{greetings[language]}</h1>
        <p className="text-lg text-gray-700 mb-6">Welcome to MindCare, your selected language is {language}. Let's explore the next steps in your mental health journey.</p>
        
        <button  onClick={showAssessmentPage}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-full mb-4 hover:bg-blue-700">
          Start Assessment
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-full hover:bg-blue-700">
          Explore Resources
        </button>
      </div>
    </div>
  );
}

export default GreetingPage;
