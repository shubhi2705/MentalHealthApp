// src/EmergencyCrisis.js
import React from 'react';

const Emergency = () => {
    const resources = [
        {
          name: 'AASRA - Helpline for Suicide Prevention',
          number: '91-9820466726',
          link: 'http://www.aasra.info/',
        },
        {
          name: 'Vandrevala Foundation Helpline',
          number: '1860 266 2345 / 1800 233 3330',
          link: 'https://www.vandrevalafoundation.com/',
        },
        {
          name: 'Mental Health Helpline (Government of India)',
          number: '1860 266 2345 / 1800 233 3330',
          link: 'https://www.mygov.in/initiatives/mental-health-support/',
        },
        {
          name: 'Befrienders Worldwide',
          number: 'Various Helplines',
          link: 'https://www.befrienders.org/',
        },
        {
          name: 'Local Emergency Services',
          number: 'Call 112',
          link: 'https://www.indiacode.nic.in/bitstream/123456789/1818/1/The_Emergency_Management_Act_2005.pdf', // For more information
        },
      ];
  return (
    <div className="emergency-crisis-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">Emergency Crisis Support</h1>
      <p className="text-lg text-center mt-4">
        If you or someone you know is in a mental health crisis, it's important to seek help immediately. Here are some resources you can contact:
      </p>
      <ul className="mt-6 space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
            <h2 className="text-xl font-semibold">{resource.name}</h2>
            <p className="text-md">{resource.number}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emergency;
