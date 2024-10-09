// src/components/tts.js

import React from 'react';
import axios from 'axios';

const TTS = () => {
  const readText = async () => {
    const text = document.body.innerText; // Read all text on the page
    const response = await axios.post('http://localhost:5001/api/tts', { text }, { responseType: 'blob' });
    const audioURL = window.URL.createObjectURL(new Blob([response.data]));
    const audio = new Audio(audioURL);
    audio.play();
  };

  return (
    <button onClick={readText}>
      Read Text
    </button>
  );
};

export default TTS;
