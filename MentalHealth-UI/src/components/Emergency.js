import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faLifeRing } from '@fortawesome/free-solid-svg-icons';

const Emergency = () => {
    const resources = [
        {
          name: 'AASRA - Helpline for Suicide Prevention',
          number: '91-9820466726',
          link: 'http://www.aasra.info/',
          icon: faPhone,
        },
        {
          name: 'Vandrevala Foundation Helpline',
          number: '1860 266 2345 / 1800 233 3330',
          link: 'https://www.vandrevalafoundation.com/',
          icon: faPhone,
        },
        {
          name: 'Mental Health Helpline (Government of India)',
          number: '1860 266 2345 / 1800 233 3330',
          link: 'https://www.mygov.in/initiatives/mental-health-support/',
          icon: faLifeRing,
        },
        {
          name: 'Befrienders Worldwide',
          number: 'Various Helplines',
          link: 'https://www.befrienders.org/',
          icon: faGlobe,
        },
        {
          name: 'Local Emergency Services',
          number: 'Call 112',
          link: 'https://www.indiacode.nic.in/bitstream/123456789/1818/1/The_Emergency_Management_Act_2005.pdf',
          icon: faPhone,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-blue-600">Emergency Crisis Support</h1>
            <p className="text-lg text-center mt-4">
                If you or someone you know is in a mental health crisis, it's important to seek help immediately. Here are some resources you can contact:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {resources.map((resource, index) => (
                    <div key={index} className="p-6 border border-blue-200 rounded-lg bg-blue-50 shadow-md">
                        <h2 className="text-xl font-semibold flex items-center">
                            <FontAwesomeIcon icon={resource.icon} className="mr-2" />
                            {resource.name}
                        </h2>
                        <p className="text-md">{resource.number}</p>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline"
                        >
                          Visit Website
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Emergency;
