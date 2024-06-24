import React, { useState } from 'react';
import { Container, Form, Button, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faArrowLeft, faArrowRight, faBicycle, faInfoCircle, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './SellBikeForm.css';

function SellBikeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    condition: 'Choose One',
    description: '',
    name: '',
    email: '',
    phone: '+31 ',
    sellerOrUser: '',
    location: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { title: 'Bike Details', fields: ['make', 'model', 'year', 'condition'] },
    { title: 'Bike Description', fields: ['description'] },
    { title: 'Seller or User Info', fields: ['name', 'email', 'phone', 'sellerOrUser', 'location'] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
  };

  const validateField = (fieldName, value) => {
    const errors = { ...formErrors };
    // Validation logic for numeric fields
    if (fieldName === 'year' && !/^\d+$/.test(value)) {
      errors[fieldName] = false;
      setErrorMessage('Year should contain only numbers.');
    } else if (fieldName === 'email' && !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
      errors[fieldName] = false;
      setErrorMessage('Please enter a valid email address.');
    } else if (fieldName === 'phone' && !/^\+31 \d+$/.test(value)) {
      errors[fieldName] = false;
      setErrorMessage('Please enter a valid phone number with country code (+31).');
    } else if (['name', 'sellerOrUser', 'location'].includes(fieldName) && !/^[a-zA-Z ]+$/.test(value)) {
      errors[fieldName] = false;
      setErrorMessage(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field can contain only letters.`);
    } else if (value.trim() === '' || value === 'Choose One') {
      errors[fieldName] = false;
      setErrorMessage(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} field cannot be empty.`);
    } else {
      errors[fieldName] = true;
      setErrorMessage('');
    }
    setFormErrors(errors);
  };

  const isFieldTouched = (fieldName) => {
    return touchedFields[fieldName] === true;
  };

  const isStepValid = () => {
    const currentFields = steps[currentStep - 1].fields;
    return currentFields.every((field) => formErrors[field]);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === steps.length && isStepValid()) {
      setTimeout(() => {
        console.log('Form Data:', formData);
        setIsCompleted(true);
      }, 1000);
    }
  };

  return (
    <Container className="sell-bike-form my-4">
      {isCompleted ? (
        <Alert variant="success">Thank you! Your bike listing has been submitted.</Alert>
      ) : (
        <>
      <h1>Sell Your Bike</h1>
      {/* ProgressBar container */}
      <ProgressBar
        now={Math.round((currentStep - 1) * (100 / steps.length))}
        label={`${Math.round((currentStep - 1) * (100 / steps.length))}%`}
        className="bar"
      />



          <Form onSubmit={handleSubmit}>
            <h2>{steps[currentStep - 1].title}</h2>
            {steps[currentStep - 1].fields.map((fieldName) => (
              <div key={fieldName} className="form-field">
                <Form.Group className="mb-3">
                  <div className="input-icon-wrapper">
                    <FontAwesomeIcon icon={fieldName === 'make' || fieldName === 'model' ? faBicycle : fieldName === 'year' || fieldName === 'condition' || fieldName === 'description' ? faInfoCircle : fieldName === 'name' || fieldName === 'sellerOrUser' || fieldName === 'location' ? faUser : fieldName === 'email' ? faEnvelope : faPhone} className="input-icon" />
                    <Form.Label>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} *</Form.Label>
                  </div>
                  {fieldName === 'description' ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name={fieldName}
                      placeholder={`Enter ${fieldName}`}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      onBlur={() => handleBlur(fieldName)}
                      className={(formErrors[fieldName] === false || (isFieldTouched(fieldName) && formErrors[fieldName] === undefined)) ? 'error' : ''}
                    />
                  ) : fieldName === 'condition' ? (
                    <Form.Control
                      as="select"
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      onBlur={() => handleBlur(fieldName)}
                      className={(formErrors[fieldName] === false || (isFieldTouched(fieldName) && formErrors[fieldName] === undefined)) ? 'error' : ''}
                    >
                      <option>Choose One</option>
                      <option>Needs Maintenance</option>
                      <option>Fair</option>
                      <option>Good</option>
                      <option>Very Good</option>
                      <option>Excellent</option>
                    </Form.Control>
                  ) : (
                    <Form.Control
                      type={fieldName === 'email' ? 'email' : 'text'}
                      name={fieldName}
                      placeholder={`Enter ${fieldName}`}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      onBlur={() => handleBlur(fieldName)}
                      className={(formErrors[fieldName] === false || (isFieldTouched(fieldName) && formErrors[fieldName] === undefined)) ? 'error' : ''}
                    />
                  )}
                  {isFieldTouched(fieldName) && (
                    <div className="input-feedback">
                      {formErrors[fieldName] === false ? (
                        <FontAwesomeIcon icon={faTimes} className="error-icon" />
                      ) : (
                        <FontAwesomeIcon icon={faCheck} className="success-icon" />
                      )}
                    </div>
                  )}
                </Form.Group>
              </div>
            ))}
            <div className="form-navigation">
              {currentStep > 1 && (
                <Button className="secondary-button" onClick={prevStep}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Previous
                </Button>
              )}
              {currentStep < steps.length ? (
                <Button className="primary-button" onClick={nextStep} disabled={!isStepValid()}>
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              ) : (
                <Button className="primary-button" type="submit" disabled={!isStepValid()}>
                  Submit <FontAwesomeIcon icon={faCheck} />
                </Button>
              )}
            </div>
          </Form>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </>
      )}
    </Container>
  );
}

export default SellBikeForm;
