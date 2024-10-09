import React, { useEffect } from 'react';

const AutoTTS = () => {
  useEffect(() => {
    const fetchTTS = async () => {
      const textToRead = document.body.innerText; // Get all text on the current page
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textToRead }),
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        console.error('Error fetching TTS:', response.statusText);
      }
    };

    fetchTTS(); // Automatically read the text when the component mounts

    return () => {
      // Cleanup can be done here if needed
    };
  }, []);

  return null; // This component does not render anything to the UI
};

export default AutoTTS;
