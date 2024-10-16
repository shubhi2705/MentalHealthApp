// src/ExploreResources.js
import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBrain, faBed, faClock, faLeaf, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Context/LanguageSelector';



const ExploreResources = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const resources = [
    {
      title: t('exploreBlogs'),
      icon: faBookOpen,
      sublinks: [
        { name: t('meditation'), link: "https://www.headspace.com/meditation", description:t('meditationDescription')},
        { name: t('mindfulness'), link: "https://www.headspace.com/mindfulness", description:t('mindfulnessDescription') },
        { name:t('sleep'), link: "https://www.headspace.com/sleep", description:t('sleepDescription') },
        { name: t('mentalHealth'), link: "https://www.headspace.com/mental-health", description: t('mentalHealthDescription')},
      ],
    },
    {
      title: t('mentalHealth'),
      icon: faBrain,
      sublinks: [
        { name: t('mentalHealthCoaching'), link: "https://www.headspace.com/mental-health-coaching", description: t('coachingOverview') },
        { name: t('coachingHelp'), link: "https://www.headspace.com/coaching-help", description: t('coachingBenefits')},
        { name: t('gettingStartedWithCoaching'), link: "https://www.headspace.com/get-started-coaching", description: t('coachingSteps') },
      ],
    },
    {
      title: t('meditationArticles'),
      icon: faLightbulb,
      sublinks: [
        { name: t('whatIsMeditation'), link: "https://www.headspace.com/what-is-meditation", description:t('meditationBasics') },
        { name: t('meditationTechniques'), link: "https://www.headspace.com/meditation-techniques", description: t('meditationTechniquesDescription')},
        { name:t('howToMeditate'),link: "https://www.headspace.com/how-to-meditate", description: t('meditationGuide') },
      ],
    },
    {
      title: t('mindfulnessArticles'),
      icon: faLeaf,
      sublinks: [
        { name: t('whatIsMindfulness'),link: "https://www.headspace.com/what-is-mindfulness", description:t('mindfulnessBenefits') },
        { name: t('flowState'), link: "https://www.headspace.com/flow-state", description: t('achievingFlowState') },
        { name: t('beMorePresent'), link: "https://www.headspace.com/be-more-present", description: t('presenceTechniques') },
      ],
    },
    {
      title:t('sleepArticles'),
      icon: faBed,
      sublinks: [
        { name: t('sleepHygiene'),link: "https://www.headspace.com/sleep-hygiene", description: t('betterSleepHygiene') },
        { name: t('sleepBetter'), link: "https://www.headspace.com/how-to-sleep-better", description: t('improveSleepQuality')},
        { name: t('fallAsleep'),link: "https://www.headspace.com/how-to-fall-asleep", description: t('fallAsleepMethods')},
      ],
    },
  ];
  
  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const handleBackToHome = () => {
    navigate("/dashboard"); // Redirect to home
  };

  return (
    <div className="max-w-full h-screen p-4 bg-gray-50 overflow-auto">
       <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div>
      <button 
        onClick={handleBackToHome} 
        className="absolute bg-transparent text-blue-600 px-4 py-2 focus:outline-none hover:text-blue-800 transition"
      >
        {t('backToHome')}
      </button>
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        {t('exploreResources')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            role="article"
          >
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={resource.icon} className="text-blue-500 mr-2 text-2xl" />
              <h2 className="text-xl font-semibold text-blue-500">{resource.title}</h2>
            </div>
            <ul className="mt-2 text-gray-700">
              {resource.sublinks.map((sublink, subIndex) => (
                <li key={subIndex} className="mb-1">
                  <a
                    onClick={() => openModal(sublink)}
                    className="text-blue-600 hover:underline cursor-pointer transition duration-200"
                  >
                    {sublink.name}
                  </a>
                  <p className="text-sm text-gray-500">{sublink.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        article={selectedArticle}
      />
    </div>
  );
};

export default ExploreResources;
