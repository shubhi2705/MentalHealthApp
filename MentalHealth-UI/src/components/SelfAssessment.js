import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Accordion, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SelfAssessment.css';

const SelfAssessment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = location.state || { language: 'English' };

  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    alert("Assessment submitted");
    navigate('/thankyou'); // Redirect after submission
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">
  <i className="fa fa-pencil-alt me-2"></i> Self-Assessment
</h2>
      <Card className="mx-auto" style={{ width: '100%', maxWidth: '900px' }}>
        <Card.Body className="container-manage">
          <form onSubmit={handleSubmit}>
            <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
              {/* Emotional Well-Being Section */}
              <Accordion.Item eventKey="0" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>Emotional Well-Being</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold" >1. How often do you feel overwhelmed by stress?</Form.Label>
                    <div className="d-flex mb-3">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question1" 
                          value={option} 
                          checked={formData.question1 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>
                    <Form.Label className="fw-bold">2. Do you find it easy to express your feelings to others?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Yes', 'No', 'Sometimes'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question2" 
                          value={option} 
                          checked={formData.question2 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Stress Levels Section */}
              <Accordion.Item eventKey="1" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>Stress Levels</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">3. What are the main sources of stress in your life right now?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Mental', 'Physical', 'Emotional'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question3" 
                          value={option} 
                          checked={formData.question3 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">4. How do you typically respond to stress?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Exercise', 'Meditation', 'Avoidance'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question4" 
                          value={option} 
                          checked={formData.question4 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">5. Have you experienced any significant life changes recently that have affected your stress levels?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Yes', 'No'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question5" 
                          value={option} 
                          checked={formData.question5 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Sleep Quality Section */}
              <Accordion.Item eventKey="2" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>Sleep Quality</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">6. How many hours of sleep do you get on average each night?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Less than 5 hours', 'Average 8 hours', 'More than 10 hours'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question6" 
                          value={option} 
                          checked={formData.question6 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">7. Do you wake up feeling rested and refreshed?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Excellent', 'Good', 'Fair', 'Poor'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question7" 
                          value={option} 
                          checked={formData.question7 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Self-Care Section */}
              <Accordion.Item eventKey="3" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>Self-Care Practices</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">8. How frequently do you practice self-care or relaxation techniques?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Daily', 'Several times a week', 'Occasionally', 'Rarely', 'Never'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question8" 
                          value={option} 
                          checked={formData.question8 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">9. What activities do you engage in when you feel overwhelmed?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Sleeping', 'Exercising', 'Meditating', 'Hobby Pursuing'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question9" 
                          value={option} 
                          checked={formData.question9 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold"l>10. How often do you practice relaxation techniques?</Form.Label>
                    <div className="d-flex mb-3 ">
                      {['Daily', 'Twice a week', 'Sometimes', 'Never'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question10" 
                          value={option} 
                          checked={formData.question10 === option} 
                          onChange={handleChange} 
                          required 
                          inline // Added to align in a row
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="text-center mt-4 p-5 m-5">
              <Button type="submit" variant="primary" className="mr-2">Submit</Button>
              <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SelfAssessment;
