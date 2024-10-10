import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'
function LandingPage() {
  const services = [
    {
      title: "AI Chat Support",
      description: "Our chatbot, powered by IBM Watson, provides real-time mental health assistance, offering personalized insights and resources to help manage stress, anxiety, and more.",
      link: "/liveChat",
    },
    {
      title: "Contact a Counselor",
      description: "Connect directly with a licensed mental health counselor through video or chat sessions. Confidential and supportive therapy at your fingertips.",
      link: "/counselor",
    },
    {
      title: "Self-Help Resources",
      description: "Explore our library of mental health resources, guided exercises, and tools like mood tracking and relaxation techniques to help you manage daily challenges.",
      link: "/resources",
    },
    {
      title: "Emergency Crisis Support",
      description: "Access immediate help during a mental health crisis. We provide direct links to local emergency services and hotline numbers tailored to your region.",
      link: "/emergency",
    },
  ];
  
  return (
    <div className="app bg-gray-100 min-h-screen">
    <nav className="navbar flex justify-between items-center p-4 bg-white shadow-lg fixed w-full z-10">
      <div className="navbar-brand text-blue-800 text-3xl font-extrabold">MindCare</div>
      <div className="navbar-options flex items-center space-x-4">
        <Link to="/signup" className="nav-link text-blue-800 hover:text-blue-600 transition duration-300">Register</Link>
        <Link to="/signin" className="nav-link text-blue-800 hover:text-blue-600 transition duration-300">Sign In</Link>
        <select className="lang-select ml-4 p-2 rounded-md bg-blue-50 text-gray-800">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </nav>
  
    <div className="flex flex-col items-center justify-center pt-24 p-6">
      <h1 className="text-6xl font-extrabold text-blue-800 mb-6 animate__animated animate__fadeIn">MindCare</h1>
      <p className="text-lg text-gray-800 mb-10 max-w-2xl text-center animate__animated animate__fadeIn animate__delay-1s">
        Your mental health matters, no matter where you are. MindCare offers personalized mental health support for remote and rural communities. Get access to self-help tools, AI-powered chat support, and live connections to mental health professionals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link to={service.link} className="text-blue-700 hover:text-blue-500 font-semibold underline">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  

  )
}

export default LandingPage;
