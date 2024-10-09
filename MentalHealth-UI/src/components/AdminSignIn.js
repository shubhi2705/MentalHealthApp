import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import '../assets/AdminSignIn.css';

const AdminSignIn = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleAddWorkshop = (e) => {
    e.preventDefault();
    const newWorkshop = { title, location, contact };

    const savedWorkshops = JSON.parse(localStorage.getItem('workshops')) || [];
    savedWorkshops.push(newWorkshop);
    localStorage.setItem('workshops', JSON.stringify(savedWorkshops));

    // Redirect back to the workshop page
    navigate('/workshop');
  };

  return (
    <Container className="admin-signin-container">
      <h1>Admin Sign-In</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="error-message">{error}</p>}

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>

      {/* Show the workshop form only if authenticated */}
      {isAuthenticated && (
        <Form onSubmit={handleAddWorkshop} className="workshop-form">
          <h2>Add New Workshop</h2>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Workshop Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter workshop title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter workshop location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicContact">
            <Form.Label>Point of Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact info"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Workshop
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AdminSignIn;
