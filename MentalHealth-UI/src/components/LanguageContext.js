import React, { createContext, useState } from "react";
import axios from "axios";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState("en");

  const changeLanguage = async (languageCode) => {
    const contentToTranslate = {
      title: "Your mental health matters",
      description: "Get access to personalized mental health support.",
      service1: "AI Chat Support",
      service1_desc: "Our chatbot, powered by IBM Watson, provides real-time mental health assistance.",
      service2: "Contact a Counselor",
      service2_desc: "Connect directly with a licensed mental health counselor.",
    };

    try {
      const response = await axios.post(
        `https://api.apilayer.com/language_translation/translate`, // Replace with actual API
        {
          target: languageCode,
          q: Object.values(contentToTranslate),
        },
        {
          headers: {
            apiKey: 'NTHsShNfzb9N7fkqE49l8AovfvyB0BhE', // Use your API key
          },
        }
      );

      const translationData = response.data.translations; // Assuming this is the structure of response

      setTranslations({
        title: translationData[0], 
        description: translationData[1], 
        service1: translationData[2],
        service1_desc: translationData[3],
        service2: translationData[4],
        service2_desc: translationData[5],
      });

      setLanguage(languageCode);
    } catch (error) {
      console.error("Translation API error:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ translations, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
