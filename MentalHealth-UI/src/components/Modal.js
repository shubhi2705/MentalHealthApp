// src/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-80 text-center">
        <span
          className="text-xl font-bold cursor-pointer float-right"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-bold mt-4">{article.name}</h2>
        <p className="mt-2">{article.description}</p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Modal;
