import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import '../assets/GuidedExercise.css';

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
    link: '#', // Link to the actual exercise or audio guide if available
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
    link: '#',
  },
  {
    title: 'Body Scan Meditation',
    description: 'An exercise to tune into the sensations of your body and relieve tension.',
    duration: '20 minutes',
    difficulty: 'Medium',
    instructions: `1. Lie down in a comfortable position, allowing your body to relax fully.
    2. Close your eyes and take a few deep breaths.
    3. Start by focusing on the toes of your right foot, noticing any sensations without judgment.
    4. Slowly move your attention up your body, part by part (toes, ankles, legs, hips, torso, etc.).
    5. If you encounter tension or discomfort, take a deep breath and imagine releasing it.`,
    link: '#',
  },
  {
    title: 'Visualization Meditation',
    description: 'Practice positive visualization techniques to manage stress and anxiety.',
    duration: '10 minutes',
    difficulty: 'Easy',
    instructions: `1. Sit comfortably and close your eyes.
    2. Imagine a peaceful scene, such as a beach, a forest, or a quiet meadow.
    3. Visualize yourself in that scene, engaging all your senses—feel the wind, smell the air, hear the sounds.
    4. Stay in this visualization for several minutes, letting the scene calm and relax you.`,
    link: '#',
  },
  {
    title: 'Loving-Kindness Meditation',
    description: 'A meditation focused on developing compassion and kindness towards yourself and others.',
    duration: '12 minutes',
    difficulty: 'Medium',
    instructions: `1. Sit comfortably, close your eyes, and take a few deep breaths.
    2. Focus on feelings of kindness and compassion towards yourself. Silently repeat, "May I be happy. May I be healthy. May I be safe."
    3. After several minutes, shift your focus to a loved one and repeat the same phrases for them.
    4. Gradually extend this loving-kindness to more people, including strangers and even those you may have conflicts with.`,
    link: '#',
  },
];

const GuidedExercise = () => {
  return (
    <Container className="exercise-container">
      <h1 className="exercise-title">Guided Exercises for Mind and Meditation</h1>
      <p className="exercise-intro">
        Explore a range of exercises designed to help you manage stress, increase mindfulness, and improve overall well-being.
      </p>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <Card key={index} className="exercise-card">
            <Card.Body>
              <Card.Title className="exercise-card-title">{exercise.title}</Card.Title>
              <Card.Text>
                <strong>Duration:</strong> {exercise.duration} <br />
                <strong>Difficulty:</strong> {exercise.difficulty} <br />
                {exercise.description}
              </Card.Text>
              <details className="exercise-instructions">
                <summary><strong>How to do this exercise:</strong></summary>
                <p>{exercise.instructions}</p>
              </details>
              <Button variant="primary" href={exercise.link}>
                Start Exercise
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default GuidedExercise;
