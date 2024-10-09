import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './VideoCounseling.css';

const VideoCounseling = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <Container className="video-counseling">
      <h1 className="text-center video-title">Video Counseling Session</h1>

      {!isConnected ? (
        <div className="connect-section">
          <h2 className="text-center">Ready to Connect?</h2>
          <Button variant="success" onClick={handleConnect} className="connect-btn">
            Connect with a Counselor
          </Button>
        </div>
      ) : (
        <div className="video-session">
          <Row>
            <Col md={8}>
              <Card className="video-card">
                <Card.Body>
                  <div className="video-placeholder">
                    <h3>Live Video Stream</h3>
                    <p>(Video will appear here)</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="counselor-details">
                <Card.Body>
                  <h4>Counselor: Dr. Smith</h4>
                  <p>Specialist in Anxiety and Depression</p>
                  <Button variant="danger" onClick={handleDisconnect}>
                    End Session
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default VideoCounseling;
