import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import '../assets/Workshop.css'; // Link to the custom styles

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);

  // Add default workshops with more details
  useEffect(() => {
    const defaultWorkshops = [
      {
        title: 'Mental Health Awareness',
        location: 'Village Hall',
        contact: 'John Doe',
        date: 'October 10, 2024',
        time: '10:00 AM - 12:00 PM',
        description: 'A session on raising mental health awareness and reducing stigma in the community.',
      },
      {
        title: 'Stress Management',
        location: 'Community Center',
        contact: 'Jane Smith',
        date: 'October 20, 2024',
        time: '2:00 PM - 4:00 PM',
        description: 'Learn techniques for managing stress effectively through mindfulness and relaxation exercises.',
      },
      {
        title: 'Wellness Workshop',
        location: 'Local School',
        contact: 'Emily Brown',
        date: 'November 5, 2024',
        time: '9:00 AM - 11:00 AM',
        description: 'A workshop focused on holistic wellness practices, including yoga, meditation, and healthy living.',
      },
    ];

    const savedWorkshops = JSON.parse(localStorage.getItem('workshops')) || defaultWorkshops;
    setWorkshops(savedWorkshops);

    if (!localStorage.getItem('workshops')) {
      localStorage.setItem('workshops', JSON.stringify(defaultWorkshops));
    }
  }, []);

  return (
    <Container className="workshop-container">
      <h1 className="workshop-title">Upcoming Workshops</h1>
      <Button 
        as={Link} 
        to="/admin-signin" 
        className="add-workshop-btn"
        style={{ position: 'absolute', top: '20px', right: '20px' }} // Positioning the button to the right corner
      >
        Add New Workshop
      </Button>
      <div className="workshop-list">
        {workshops.length === 0 ? (
          <p>No workshops available.</p>
        ) : (
          workshops.map((workshop, index) => (
            <Card key={index} className="workshop-card">
              <Card.Body>
                <Card.Title className="workshop-title">{workshop.title}</Card.Title>
                <Card.Text className="workshop-info">
                  <strong>Date:</strong> {workshop.date}<br />
                  <strong>Time:</strong> {workshop.time}<br />
                  <strong>Location:</strong> {workshop.location}<br />
                  <strong>Contact:</strong> {workshop.contact}<br />
                </Card.Text>
                <Card.Text className="workshop-description">
                  {workshop.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default Workshop;
