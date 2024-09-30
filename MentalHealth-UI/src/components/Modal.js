

// src/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto relative transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">{article.title}</h2>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <a 
          href={article.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default Modal;
