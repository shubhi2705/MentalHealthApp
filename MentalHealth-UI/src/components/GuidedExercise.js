import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faHandHoldingHeart, faMountain } from '@fortawesome/free-solid-svg-icons';
import './GuidedExercise.css';

const exercises = [
  {
    title: 'Breathing Exercise',
    description: 'A guided breathing exercise to help you relax and center your thoughts.',
    duration: '10 minutes',
    difficulty: 'Easy',
    instructions: `1. Sit or lie down in a comfortable position.
    2. Close your eyes and take a deep breath through your nose, feeling your lungs expand.
    3. Hold your breath for a moment, then slowly exhale through your mouth.
    4. Repeat this process for the next 5-10 minutes, focusing on your breathing and letting go of distracting thoughts.`,
    icon: faMountain,
  },
  {
    title: 'Mindfulness Meditation',
    description: 'A short session on mindfulness to help you stay present and reduce anxiety.',
    duration: '15 minutes',
    difficulty: 'Medium',
    instructions: `1. Find a quiet space and sit comfortably with your back straight.
    2. Close your eyes and focus on your breathing, noticing each inhale and exhale.
    3. If your mind starts to wander, gently bring your focus back to your breath.
    4. Practice non-judgment by observing thoughts without getting attached to them.`,
    icon: faEye,
  },
  {
    title: 'Body Scan Meditation',
    description: 'An exercise to tune into the sensations of your body and relieve tension.',
    duration: '20 minutes',
    difficulty: 'Medium',
    instructions: `1. Lie down in a comfortable position, allowing your body to relax fully.
    2. Close your eyes and take a few deep breaths.
    3. Start by focusing on the toes of your right foot, noticing any sensations without judgment.
    4. Slowly move your attention up your body, part by part (toes, ankles, legs, hips, torso, etc.).`,
    icon: faHandHoldingHeart,
  },
  {
    title: 'Visualization Meditation',
    description: 'Practice positive visualization techniques to manage stress and anxiety.',
    duration: '10 minutes',
    difficulty: 'Easy',
    instructions: `1. Sit comfortably and close your eyes.
    2. Imagine a peaceful scene, such as a beach, a forest, or a quiet meadow.
    3. Visualize yourself in that scene, engaging all your senses—feel the wind, smell the air, hear the sounds.`,
    icon: faClock,
  },
  {
    title: 'Loving-Kindness Meditation',
    description: 'A meditation focused on developing compassion and kindness towards yourself and others.',
    duration: '12 minutes',
    difficulty: 'Medium',
    instructions: `1. Sit comfortably, close your eyes, and take a few deep breaths.
    2. Focus on feelings of kindness and compassion towards yourself. Silently repeat, "May I be happy. May I be healthy. May I be safe."`,
    icon: faHandHoldingHeart,
  },
];

const GuidedExercise = () => {
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
      <h1 className="exercise-title">Guided Exercises for Mind and Meditation</h1>
      <p className="exercise-intro">
        Explore a range of exercises designed to help you manage stress, increase mindfulness, and improve overall well-being.
      </p>
      <div className="exercise-list" style={{ maxHeight: '400px' }}> {/* Adjust height as needed */}
        {exercises.map((exercise, index) => (
          <Card key={index} className="exercise-card mb-4 shadow-lg">
            <Card.Body>
              <Card.Title className="exercise-card-title flex items-center">
                <FontAwesomeIcon icon={exercise.icon} className="mr-2" />
                {exercise.title}
              </Card.Title>
              <Card.Text className="exercise-description">
                <strong>Duration:</strong> {exercise.duration} <br />
                <strong>Difficulty:</strong> {exercise.difficulty} <br />
                {exercise.description}
              </Card.Text>
              <details className="exercise-instructions">
                <summary><strong>How to do this exercise:</strong></summary>
                <p>{exercise.instructions}</p>
              </details>
              <Button variant="primary" className="exercise-button" onClick={startExercise}>
                Start Exercise
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for Stopwatch */}
      <Modal show={showModal} onHide={handleClose} className="breathing-modal">
        <Modal.Header closeButton>
          <Modal.Title>Stopwatch</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="bubble-animation"></div>
          <h2>{new Date(elapsedTime * 1000).toISOString().substr(11, 8)}</h2>
          <p>Elapsed Time</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Stop
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GuidedExercise;
