import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Accordion, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this import is present
import './SelfAssessment.css'; // Custom CSS for additional styling

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
      <h2 className="text-center mb-4">Self-Assessment</h2>
      <Card className="mx-auto" style={{ width: '100%', maxWidth: '900px' }}>
        <Card.Body className="container-manage">
          <form onSubmit={handleSubmit}>
            <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
              {/* Emotional Well-Being Section */}
              <Accordion.Item eventKey="0" style={{ backgroundColor: '#f8f9fa',margin:'5px' }}>
                <Accordion.Header >Emotional Well-Being</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>How often do you feel overwhelmed by stress?</Form.Label>
                    <Form.Select name="question1" value={formData.question1} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Never">Never</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Sometimes">Sometimes</option>
                      <option value="Often">Often</option>
                      <option value="Always">Always</option>
                    </Form.Select>
                    <Form.Label>Do you find it easy to express your feelings to others?</Form.Label>
                    <Form.Select name="question2" value={formData.question2} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Sometimes">Sometimes</option>
                    </Form.Select>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Mood Section */}
              <Accordion.Item eventKey="1" style={{ backgroundColor: '#f8f9fa',margin:'5px' }}>
                <Accordion.Header>Stress Levels</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>What are the main sources of stress in your life right now?</Form.Label>
                    <Form.Select name="question2" value={formData.question2} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Mental">Mental</option>
                      <option value="Physical">Physical</option>
                      <option value="Emotional">Emotional</option>
                    </Form.Select>

                    <Form.Label>How do you typically respond to stress?</Form.Label>
                    <Form.Select name="question2" value={formData.question2} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Exercise">Exercise</option>
                      <option value="Meditation">Meditation</option>
                      <option value="Avoidance">Avoidance</option>
                    </Form.Select>

                    <Form.Label>Have you experienced any significant life changes recently that have affected your stress levels?</Form.Label>
                    <Form.Select name="question2" value={formData.question2} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                    
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Sleep Quality Section */}
              <Accordion.Item eventKey="2" style={{ backgroundColor: '#f8f9fa',margin:'5px' }}>
                <Accordion.Header>Sleep Quality</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>How many hours of sleep do you get on average each night?</Form.Label>
                    <Form.Select name="question3" value={formData.question3} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="<5hours>">Less than 5 hours</option>
                      <option value="8hours">Average 8 hours </option>
                      <option value="10hours">More than 10 hours</option>
                    </Form.Select>

                    <Form.Label>Do you wake up feeling rested and refreshed? </Form.Label>
                    <Form.Select name="question3" value={formData.question3} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Poor">Poor</option>
                    </Form.Select>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Self-Care Section */}
              <Accordion.Item eventKey="3" style={{ backgroundColor: '#f8f9fa',margin:'5px' }}>
                <Accordion.Header>Self-Care Practices</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>How frequently do you practice self-care or relaxation techniques?</Form.Label>
                    <Form.Select name="question4" value={formData.question4} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Daily">Daily</option>
                      <option value="Several times a week">Several times a week</option>
                      <option value="Occasionally">Occasionally</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Never">Never</option>
                    </Form.Select>
                    <Form.Label>What activities do you engage in when you feel overwhelmed?</Form.Label>
                    <Form.Select name="question4" value={formData.question4} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Sleeping">Sleeping</option>
                      <option value="Exercising">Exercising</option>
                      <option value="Meditating">Meditating</option>
                      <option value="Hobby Pursuing">Hobby Pursuing</option>
                    </Form.Select>

                    <Form.Label>How often do you practice relaxation techniques</Form.Label>
                    <Form.Select name="question4" value={formData.question4} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="Daily">Daily</option>
                      <option value="Twice in a week">Twice in a week</option>
                      <option value="Sometimes">Sometimes</option>
                      <option value="Never">Never</option>
                    </Form.Select>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="text-center mt-4 p-5 m-5">
              <Button type="submit" variant="primary"  className="mr-2">Submit</Button>
              <Button type="back" variant="primary">Back</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SelfAssessment;
