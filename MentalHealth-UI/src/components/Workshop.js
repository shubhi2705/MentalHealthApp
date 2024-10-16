import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/Workshop.css'; // Link to the custom styles
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Context/LanguageSelector';

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const defaultWorkshops = [
      {
        title: t('workshopTitleMentalHealth'),
        location: t('workshopLocationVillageHall'),
        contact: t('workshopContactJohnDoe'),
        date: t('workshopDate1'),
        time: t('workshopTime1'),
        description: t('workshopDescriptionMentalHealth'),
      },
      {
        title: t('workshopTitleStressManagement'),
        location: t('workshopLocationCommunityCenter'),
        contact: t('workshopContactJaneSmith'),
        date: t('workshopDate2'),
        time: t('workshopTime2'),
        description: t('workshopDescriptionStressManagement'),
      },
      {
        title: t('workshopTitleWellness'),
        location: t('workshopLocationLocalSchool'),
        contact: t('workshopContactEmilyBrown'),
        date: t('workshopDate3'),
        time: t('workshopTime3'),
        description: t('workshopDescriptionWellness'),
      },
    ];

    const savedWorkshops = JSON.parse(localStorage.getItem('workshops')) || defaultWorkshops;
    setWorkshops(savedWorkshops);

    if (!localStorage.getItem('workshops')) {
      localStorage.setItem('workshops', JSON.stringify(defaultWorkshops));
    }
  }, [t]);

  return (
    <Container className="workshop-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 className="workshop-title">{t('upcomingWorkshops')}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LanguageSelector />
          <Button 
            as={Link} 
            to="/admin-signin" 
            className="add-workshop-btn"
            style={{ marginLeft: '20px' }} // Add margin to separate button from language selector
          >
            {t('addNewWorkshop')}
          </Button>
        </div>
      </div>
      <div className="workshop-list">
        {workshops.length === 0 ? (
          <p>{t('noWorkshops')}</p>
        ) : (
          workshops.map((workshop, index) => (
            <Card key={index} className="workshop-card">
              <Card.Body>
                <Card.Title className="workshop-title">{workshop.title}</Card.Title>
                <Card.Text className="workshop-info">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  <strong>{t('date')}:</strong> {workshop.date}<br />
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  <strong>{t('time')}:</strong> {workshop.time}<br />
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <strong>{t('location')}:</strong> {workshop.location}<br />
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  <strong>{t('contact')}:</strong> {workshop.contact}<br />
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
