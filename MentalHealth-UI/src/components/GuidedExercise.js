// src/GuidedExercise.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faHandHoldingHeart, faMountain } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import './GuidedExercise.css';
import LanguageSelector from '../Context/LanguageSelector';

const exercises = [
  {
    key: "breathing_exercise",
    duration: "10 minutes",
    difficulty: "Easy",
    instructions: "breathing_exercise_instructions",
    icon: faMountain,
  },
  {
    key: "mindfulness_meditation",
    duration: "15 minutes",
    difficulty: "Medium",
    instructions: "mindfulness_meditation_instructions",
    icon: faEye,
  },
  {
    key: "body_scan_meditation",
    duration: "20 minutes",
    difficulty: "Medium",
    instructions: "body_scan_meditation_instructions",
    icon: faHandHoldingHeart,
  },
  {
    key: "visualization_meditation",
    duration: "10 minutes",
    difficulty: "Easy",
    instructions: "visualization_meditation_instructions",
    icon: faClock,
  },
  {
    key: "loving_kindness_meditation",
    duration: "12 minutes",
    difficulty: "Medium",
    instructions: "loving_kindness_meditation_instructions",
    icon: faHandHoldingHeart,
  },
];

const GuidedExercise = () => {
  const { t } = useTranslation();
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerActive]);

  const startExercise = () => {
    setElapsedTime(0);
    setIsTimerActive(true);
    setShowModal(true);
  };

  const handleClose = () => {
    setIsTimerActive(false);
    setShowModal(false);
  };

  return (
    <Container className="exercise-container">
       <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div>
      <h1 className="exercise-title">{t("guided_exercises_title")}</h1>
      <p className="exercise-intro">
        {t("guided_exercises_intro")}
      </p>
      <div className="exercise-list" style={{ maxHeight: '400px' }}>
        {exercises.map((exercise, index) => (
          <Card key={index} className="exercise-card mb-4 shadow-lg">
            <Card.Body>
              <Card.Title className="exercise-card-title flex items-center">
                <FontAwesomeIcon icon={exercise.icon} className="mr-2" />
                {t(exercise.key)}
              </Card.Title>
              <Card.Text className="exercise-description">
                <strong>{t("duration")}:</strong> {exercise.duration} <br />
                <strong>{t("difficulty")}:</strong> {exercise.difficulty} <br />
                {t(exercise.key + "_description")}
              </Card.Text>
              <details className="exercise-instructions">
                <summary><strong>{t("how_to_do_this_exercise")}:</strong></summary>
                <p>{t(exercise.instructions)}</p>
              </details>
              <Button variant="primary" className="exercise-button" onClick={startExercise}>
                {t("start_exercise")}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for Stopwatch */}
      <Modal show={showModal} onHide={handleClose} className="breathing-modal">
        <Modal.Header closeButton>
          <Modal.Title>{t("stopwatch_title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="bubble-animation"></div>
          <h2>{new Date(elapsedTime * 1000).toISOString().substr(11, 8)}</h2>
          <p>{t("elapsed_time")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("stop")}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GuidedExercise;
