require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { IamAuthenticator } = require('ibm-watson/auth');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const AssistantV2 = require('ibm-watson/assistant/v2');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Watson STT setup
const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.SPEECH_TO_TEXT_APIKEY,
  }),
  serviceUrl: process.env.SPEECH_TO_TEXT_URL,
});

// Watson TTS setup
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

// Watson Assistant setup
const assistant = new AssistantV2({
  version: '2021-06-14',
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_APIKEY,
  }),
  serviceUrl: process.env.ASSISTANT_URL,
});

// Route to handle Speech to Text
app.post('/api/stt', (req, res) => {
  const audio = req.body.audio;

  if (!audio) {
    return res.status(400).send('Audio data is required');
  }

  const buffer = Buffer.from(audio, 'base64');

  const params = {
    audio: buffer,
    contentType: 'audio/wav',
  };

  speechToText.recognize(params)
    .then(response => {
      const transcript = response.result.results.map(result => result.alternatives[0].transcript).join('\n');
      res.json({ transcript });
    })
    .catch(err => {
      console.error('Error during STT processing:', err);
      res.status(500).json({ error: 'Failed to transcribe audio.', details: err });
    });
});

// Route to handle Text to Speech
app.post('/api/tts', (req, res) => {
  const text = req.body.text;

  const params = {
    text,
    accept: 'audio/wav',
    voice: 'en-US_AllisonV3Voice',
  };

  textToSpeech.synthesize(params)
    .then(response => {
      const audio = response.result;
      const outputFilePath = 'output.wav';
      audio.pipe(fs.createWriteStream(outputFilePath));
      audio.on('end', () => {
        res.download(outputFilePath, () => {
          fs.unlinkSync(outputFilePath);
        });
      });
    })
    .catch(err => {
      console.error('Error during TTS processing:', err);
      res.status(500).json({ error: 'Failed to synthesize speech.', details: err });
    });
});

// Route to handle Assistant chatbot
app.post('/api/message', async (req, res) => {
  const { message, sessionId } = req.body;

  if (!sessionId) {
    try {
      const session = await assistant.createSession({ assistantId: process.env.ASSISTANT_ID });
      res.json({ sessionId: session.result.session_id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create session.' });
    }
  } else {
    try {
      const response = await assistant.message({
        assistantId: process.env.ASSISTANT_ID,
        sessionId: sessionId,
        input: { message_type: 'text', text: message },
      });
      res.json(response.result.output.generic);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to send message.' });
    }
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
