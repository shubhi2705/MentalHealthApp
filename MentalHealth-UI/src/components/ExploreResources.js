// src/ExploreResources.js
import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBrain, faBed, faClock, faLeaf, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const resources = [
  {
    title: "Explore the Blogs",
    icon: faBookOpen,
    sublinks: [
      { name: "Meditation", link: "https://www.headspace.com/meditation", description: "Learn about various meditation practices." },
      { name: "Mindfulness", link: "https://www.headspace.com/mindfulness", description: "Discover the art of being present." },
      { name: "Sleep", link: "https://www.headspace.com/sleep", description: "Explore techniques for better sleep." },
      { name: "Mental Health", link: "https://www.headspace.com/mental-health", description: "Understand mental well-being." },
    ],
  },
  {
    title: "Mental Health Articles",
    icon: faBrain,
    sublinks: [
      { name: "What is Mental Health Coaching", link: "https://www.headspace.com/mental-health-coaching", description: "An overview of mental health coaching." },
      { name: "What Can a Coach Help Me With", link: "https://www.headspace.com/coaching-help", description: "Explore the benefits of coaching." },
      { name: "How to Get Started with Coaching", link: "https://www.headspace.com/get-started-coaching", description: "Steps to begin your coaching journey." },
    ],
  },
  {
    title: "Meditation Articles",
    icon: faLightbulb,
    sublinks: [
      { name: "What is Meditation", link: "https://www.headspace.com/what-is-meditation", description: "Learn the basics of meditation." },
      { name: "Meditation Techniques", link: "https://www.headspace.com/meditation-techniques", description: "Different techniques to enhance your practice." },
      { name: "How to Meditate", link: "https://www.headspace.com/how-to-meditate", description: "A guide to starting meditation." },
    ],
  },
  {
    title: "Mindfulness Articles",
    icon: faLeaf,
    sublinks: [
      { name: "What is Mindfulness", link: "https://www.headspace.com/what-is-mindfulness", description: "Understanding mindfulness and its benefits." },
      { name: "Flow State", link: "https://www.headspace.com/flow-state", description: "Achieving flow state through mindfulness." },
      { name: "How to Be More Present", link: "https://www.headspace.com/be-more-present", description: "Techniques to enhance your presence." },
    ],
  },
  {
    title: "Sleep Articles",
    icon: faBed,
    sublinks: [
      { name: "Sleep Hygiene", link: "https://www.headspace.com/sleep-hygiene", description: "Practices for better sleep hygiene." },
      { name: "How to Sleep Better", link: "https://www.headspace.com/how-to-sleep-better", description: "Tips to improve your sleep quality." },
      { name: "How to Fall Asleep", link: "https://www.headspace.com/how-to-fall-asleep", description: "Methods to help you fall asleep faster." },
    ],
  },
];

const ExploreResources = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
      <button 
        onClick={handleBackToHome} 
        className="absolute bg-transparent text-blue-600 px-4 py-2 focus:outline-none hover:text-blue-800 transition"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Explore Resources
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
