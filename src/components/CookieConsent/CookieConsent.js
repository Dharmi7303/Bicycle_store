import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './CookieConsent.css';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven !== 'true') {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    <>
      {show && (
        <Modal show={show} onHide={handleClose} centered className="cookie-consent-modal">
          <Modal.Header closeButton>
            <Modal.Title>Cookie Consent</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
          </Modal.Body>
          <Modal.Footer>
            <Button className="primary-button" onClick={handleClose}>
              I Agree
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CookieConsent;
