import axios from 'axios';

const apiKey = 'iZyf23wzJvKuZ2BUwRaHJ7WVzOe2BKMEESRRaTRxLor2'; // Use your API Key
const url = 'https://api.jp-tok.natural-language-understanding.watson.cloud.ibm.com/instances/39aae3a4-a51f-4cff-90b4-b239fcf9acdf/v1/analyze?version=2019-07-12'; // Watson NLU URL

export const analyzeSentiment = async (text) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`apikey:${apiKey}`)}` // Encoding API Key in Basic Auth format
  };

  const data = {
    text: text,
    features: {
      sentiment: {},
      keywords: {
        emotion: true
      }
    }
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in sentiment analysis:", error);
    return null;
  }
};
