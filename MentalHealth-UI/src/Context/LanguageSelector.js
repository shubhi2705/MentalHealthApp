// src/components/LanguageSelector.js
import React from 'react';
import { useLanguage } from './LanguageContext';
import './LanguageSelector.css'
import { Dropdown } from 'react-bootstrap';
const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    console.log("Langauge is:",lang)
    changeLanguage(lang);
  };

  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Change Language
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange('es')}>Spanish</Dropdown.Item>
      
      <Dropdown.Item onClick={() => handleLanguageChange('zh')}>Chinese</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange('fr')}>French</Dropdown.Item>
      
      <Dropdown.Item onClick={() => handleLanguageChange('de')}>German</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange('hi')}>Hindi</Dropdown.Item>

      <Dropdown.Item onClick={() => handleLanguageChange('ko')}>Korean</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange('ja')}>Japanese</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  
  );
};

export default LanguageSelector;
