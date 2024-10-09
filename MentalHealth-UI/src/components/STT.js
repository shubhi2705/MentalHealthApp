import React, { useState } from 'react';
import axios from 'axios';

function STT() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = handleDataAvailable;
        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      })
      .catch(err => {
        console.error('Error accessing microphone:', err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      const audioBlob = event.data;
      const formData = new FormData();
      formData.append('audio', audioBlob, 'audio.wav');

      axios.post('http://localhost:5001/api/stt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log('Transcription:', response.data);
          // Assuming you have an input field that you want to fill with the transcribed text
          const focusedElement = document.activeElement;
          if (focusedElement && focusedElement.tagName === 'INPUT') {
            focusedElement.value = response.data.results[0].alternatives[0].transcript;
          }
        })
        .catch(err => {
          console.error('Error during STT request:', err);
        });
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default STT;
