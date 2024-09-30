import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <h1 className="text-6xl font-extrabold text-white mb-6">MindCare</h1>
      <p className="text-lg text-white mb-10 max-w-4xl text-center">
        Your mental health matters, no matter where you are. MindCare offers personalized mental health support for remote and rural communities.
        Get access to self-help tools, AI-powered chat support, and live connections to mental health professionals.
      </p>
      <div className="mt-12">
        <Link to="/signin" className="bg-white text-blue-600 px-10 py-4 rounded-lg shadow-lg text-lg hover:bg-blue-50">
          Get Started
        </Link>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">AI Chat Support</h2>
          <p className="text-gray-700 mb-4">
            Our chatbot, powered by IBM Watson, provides real-time mental health assistance, offering personalized insights and resources to help manage stress, anxiety, and more.
          </p>
          <Link to="/chatbot" className="text-blue-700 hover:text-blue-500 underline">Learn More</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact a Counselor</h2>
          <p className="text-gray-700 mb-4">
            Connect directly with a licensed mental health counselor through video or chat sessions. Confidential and supportive therapy at your fingertips.
          </p>
          <Link to="/counselor" className="text-blue-700 hover:text-blue-500 underline">Get Support</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Self-Help Resources</h2>
          <p className="text-gray-700 mb-4">
            Explore our library of mental health resources, guided exercises, and tools like mood tracking and relaxation techniques to help you manage daily challenges.
          </p>
          <Link to="/resources" className="text-blue-700 hover:text-blue-500 underline">Explore Resources</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Emergency Crisis Support</h2>
          <p className="text-gray-700 mb-4">
            Access immediate help during a mental health crisis. We provide direct links to local emergency services and hotline numbers tailored to your region.
          </p>
          <Link to="/emergency" className="text-blue-700 hover:text-blue-500 underline">Find Help</Link>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
