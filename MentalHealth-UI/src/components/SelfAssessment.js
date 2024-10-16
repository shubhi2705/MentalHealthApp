import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Accordion, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './SelfAssessment.css';
import LanguageSelector from '../Context/LanguageSelector';

const SelfAssessment = () => {
  const { t } = useTranslation();
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
    alert(t('assessmentSubmitted'));
    navigate('/thankyou'); // Redirect after submission
  };

  return (
    <Container className="mt-5">
       <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
        <LanguageSelector />
      </div>
      <h2 className="text-center mb-4">
        <i className="fa fa-pencil-alt me-2"></i> {t('selfAssessment')}
      </h2>
      <Card className="mx-auto" style={{ width: '100%', maxWidth: '900px' }}>
        <Card.Body className="container-manage">
          <form onSubmit={handleSubmit}>
            <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
              {/* Emotional Well-Being Section */}
              <Accordion.Item eventKey="0" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>{t('emotionalWellBeing')}</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">{t('question1')}</Form.Label>
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
                          inline 
                        />
                      ))}
                    </div>
                    <Form.Label className="fw-bold">{t('question2')}</Form.Label>
                    <div className="d-flex mb-3">
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
                          inline 
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Stress Levels Section */}
              <Accordion.Item eventKey="1" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>{t('stressLevels')}</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">{t('question3')}</Form.Label>
                    <div className="d-flex mb-3">
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
                          inline 
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">{t('question4')}</Form.Label>
                    <div className="d-flex mb-3">
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
                          inline 
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Sleep Quality Section */}
              <Accordion.Item eventKey="2" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>{t('sleepQuality')}</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">{t('question5')}</Form.Label>
                    <div className="d-flex mb-3">
                      {['Less than 5 hours', 'Average 8 hours', 'More than 10 hours'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question5" 
                          value={option} 
                          checked={formData.question5 === option} 
                          onChange={handleChange} 
                          required 
                          inline 
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">{t('question6')}</Form.Label>
                    <div className="d-flex mb-3">
                      {['Excellent', 'Good', 'Fair', 'Poor'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question6" 
                          value={option} 
                          checked={formData.question6 === option} 
                          onChange={handleChange} 
                          required 
                          inline 
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>

              {/* Self-Care Section */}
              <Accordion.Item eventKey="3" style={{ backgroundColor: '#f8f9fa', margin: '5px' }}>
                <Accordion.Header>{t('selfCare')}</Accordion.Header>
                <Accordion.Body>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">{t('question7')}</Form.Label>
                    <div className="d-flex mb-3">
                      {['Daily', 'Several times a week', 'Occasionally', 'Rarely', 'Never'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question7" 
                          value={option} 
                          checked={formData.question7 === option} 
                          onChange={handleChange} 
                          required 
                          inline 
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">{t('question8')}</Form.Label>
                    <div className="d-flex mb-3">
                      {['Sleeping', 'Exercising', 'Meditating', 'Hobby Pursuing'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question8" 
                          value={option} 
                          checked={formData.question8 === option} 
                          onChange={handleChange} 
                          required 
                          inline 
                        />
                      ))}
                    </div>

                    <Form.Label className="fw-bold">{t('question9')}</Form.Label>
                    <div className="d-flex mb-3">
                      {['Daily', 'Twice a week', 'Sometimes', 'Never'].map((option) => (
                        <Form.Check 
                          key={option} 
                          type="radio" 
                          label={option} 
                          name="question9" 
                          value={option} 
                          checked={formData.question9 === option} 
                          onChange={handleChange} 
                          required 
                          inline 
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="text-center mt-4 p-5 m-5">
              <Button type="submit" variant="primary" className="mr-2">{t('submit')}</Button>
              <Button variant="secondary" onClick={() => navigate(-1)}>{t('back')}</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SelfAssessment;
