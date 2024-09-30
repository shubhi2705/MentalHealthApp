// src/ExploreResources.js
import React, { useState } from 'react';
import Modal from './Modal';

const resources = [
  {
    title: 'Explore the Blogs',
    sublinks: [
      { name: 'Meditation', link: 'https://www.headspace.com/meditation', description: 'Learn about various meditation practices.' },
      { name: 'Mindfulness', link: 'https://www.headspace.com/mindfulness', description: 'Discover the art of being present.' },
      { name: 'Sleep', link: 'https://www.headspace.com/sleep', description: 'Explore techniques for better sleep.' },
      { name: 'Mental Health', link: 'https://www.headspace.com/mental-health', description: 'Understand mental well-being.' },
    ],
  },
  {
    title: 'Mental Health Articles',
    sublinks: [
      { name: 'What is Mental Health Coaching', link: 'https://www.headspace.com/mental-health-coaching', description: 'An overview of mental health coaching.' },
      { name: 'What Can a Coach Help Me With', link: 'https://www.headspace.com/coaching-help', description: 'Explore the benefits of coaching.' },
      { name: 'How to Get Started with Coaching', link: 'https://www.headspace.com/get-started-coaching', description: 'Steps to begin your coaching journey.' },
    ],
  },
  {
    title: 'Meditation Articles',
    sublinks: [
      { name: 'What is Meditation', link: 'https://www.headspace.com/what-is-meditation', description: 'Learn the basics of meditation.' },
      { name: 'Meditation Techniques', link: 'https://www.headspace.com/meditation-techniques', description: 'Different techniques to enhance your practice.' },
      { name: 'How to Meditate', link: 'https://www.headspace.com/how-to-meditate', description: 'A guide to starting meditation.' },
    ],
  },
  {
    title: 'Mindfulness Articles',
    sublinks: [
      { name: 'What is Mindfulness', link: 'https://www.headspace.com/what-is-mindfulness', description: 'Understanding mindfulness and its benefits.' },
      { name: 'Flow State', link: 'https://www.headspace.com/flow-state', description: 'Achieving flow state through mindfulness.' },
      { name: 'How to Be More Present', link: 'https://www.headspace.com/be-more-present', description: 'Techniques to enhance your presence.' },
    ],
  },
  {
    title: 'Sleep Articles',
    sublinks: [
      { name: 'Sleep Hygiene', link: 'https://www.headspace.com/sleep-hygiene', description: 'Practices for better sleep hygiene.' },
      { name: 'How to Sleep Better', link: 'https://www.headspace.com/how-to-sleep-better', description: 'Tips to improve your sleep quality.' },
      { name: 'How to Fall Asleep', link: 'https://www.headspace.com/how-to-fall-asleep', description: 'Methods to help you fall asleep faster.' },
    ],
  },
];

const ExploreResources = () => {
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

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Explore Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-300 rounded-lg p-6 transition duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">{resource.title}</h2>
            <ul className="mt-2 text-gray-700">
              {resource.sublinks.map((sublink, subIndex) => (
                <li key={subIndex} className="mb-2">
                  <a 
                    onClick={() => openModal(sublink)} 
                    className="text-600 hover:underline cursor-pointer"
                  >
                    {sublink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} article={selectedArticle} />
    </div>
  );
};

export default ExploreResources;
