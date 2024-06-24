import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Add any other icons you need
import './Cart.css';
import PaymentOptionsImages from './PaymentOptionsImages'; // Adjust the path as necessary

function Cart({ cartItems }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    lastname: ' ', // Initial value with a space
    address: '',
    homenumber: '',
    postcode: '',
    phone: '+91 ',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const taxes = cartTotal * 0.21;
    const shipping = 23;
    setTotalPrice(cartTotal + taxes + shipping);
  }, [cartItems]);

  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <ListGroup.Item key={item.id || index}>
        <div className="cart-item">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-price">Rs. {item.price.toFixed(2)}</div>
        </div>
      </ListGroup.Item>
    ));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let isValid = true;
    switch (name) {
      case 'name':
        isValid = /^[a-zA-Z ]+$/.test(value);
        break;
      case 'address':
        isValid = /^[a-zA-Z ]+$/.test(value);
        break;
      case 'postcode':
        isValid = /^\d+$/.test(value);
        break;
      case 'phone':
        isValid = /^\+91 \d+$/.test(value);
        break;
      case 'lastname':
        isValid = /^[a-zA-Z ]+$/.test(value);
        break;
      case 'homenumber':
          isValid = /^\d+$/.test(value);
          break;
      case 'email':
      // Use a regular expression to validate the email format
      isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      break;      
      default:
        isValid = value.trim() !== '';
    }
    setFormErrors({ ...formErrors, [name]: isValid });
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((v) => v === true) && Object.keys(formErrors).length === Object.keys(formData).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use isFormValid here to ensure entire form is valid before submission
    if(isFormValid()) {
      // Implement submission logic here
      alert('Form submitted');
    } else {
      // Optionally handle the case where the form is somehow not valid at submission
      alert('Please ensure all form fields are correctly filled and valid.');
    }
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { title: 'Step 1', fields: ['name', 'lastname', 'address', 'homenumber', 'postcode'], contentType: 'formFields' },
    { title: 'Step 2', fields: ['phone', 'email'], contentType: 'formFields' },
    { title: 'Step 3', contentType: 'images' },
  ];
  
  const handleBlur = (fieldName) => {
    // Implement your field blur logic here
  };

  const isFieldTouched = (fieldName) => {
    // Implement your field touched logic here
    return true; // Placeholder, modify as needed
  };

  const isStepValid = () => {
    // Check if the current step has fields defined
    if (steps[currentStep - 1].fields) {
      const currentStepFields = steps[currentStep - 1].fields;
      const fieldsValid = currentStepFields.every((field) => formErrors[field] === true);
      const fieldsFilled = currentStepFields.every((field) => formData[field].trim() !== '');
      return fieldsValid && fieldsFilled;
    } else {
      // If no fields are defined for the step, consider the validation requirement met
      // You might want to adjust this logic based on your app's needs
      return true;
    }
  };
  
  

  return (
    <Container className="cart-form">
            <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ListGroup className="mb-4">
          {renderCartItems()}
          <ListGroup.Item>
            <div className="cart-summary">
              <div>Taxes: 21%</div>
              <div>Shipping: 23 Rs.</div>
              <div>Total: Rs. {totalPrice.toFixed(2)}</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        <Alert variant="warning">Your cart is empty.</Alert>
      )}
<Form onSubmit={handleSubmit}>
  <h2>{steps[currentStep - 1].title}</h2>
  {currentStep === 3 ? (
    <PaymentOptionsImages /> // Correctly placed for rendering in Step 3
  ) : (
    steps[currentStep - 1].fields.map((fieldName) => (
<Form.Group key={fieldName} className="mb-3" controlId={`form-${fieldName}`}>
  <Form.Label>
    {fieldName === 'lastname' ? 'Last Name' : fieldName === 'homenumber' ? 'Home Number' : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
  </Form.Label>
  <div className="input-group">
    <Form.Control
      type={fieldName === 'email' ? 'email' : 'text'}
      name={fieldName}
      placeholder={
        fieldName === 'lastname' ? 'Enter Last Name' :
        fieldName === 'homenumber' ? 'Enter Home Number' :
        `Enter ${fieldName}`
      }
      value={formData[fieldName]}
      onChange={handleChange}
      onBlur={() => handleBlur(fieldName)}
      isInvalid={isFieldTouched(fieldName) && !formErrors[fieldName]}
    />
    <div className="input-group-append">
      {formErrors[fieldName] ? (
        <span className="success-icon">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      ) : isFieldTouched(fieldName) ? (
        <span className="error-icon">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      ) : null}
    </div>
    <Form.Control.Feedback type="invalid">
      Please provide a valid {fieldName === 'lastname' ? 'Last Name' : fieldName === 'homenumber' ? 'Home Number' : fieldName}.
    </Form.Control.Feedback>
  </div>
</Form.Group>


    ))
  )}
</Form>

<div className="navigation-buttons">
  {currentStep > 1 && (
    <Button className="secondary-button" onClick={prevStep}>
      <FontAwesomeIcon icon={faArrowLeft} /> Previous
    </Button>
  )}
  {currentStep < steps.length && (
    <Button className="primary-button" onClick={nextStep} disabled={!isStepValid()}>
      Next <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  )}
    {/* Conditional rendering of the submit button */}
    {currentStep === steps.length && (
    <Button className="primary-button" type="submit" disabled={!isStepValid()}>
      Pay Now <FontAwesomeIcon icon={faCheck} />
    </Button>
  )}
</div>

    </Container>
  );
}

export default Cart;
