import React from 'react';
import { Image } from 'react-bootstrap';
import './PaymentOptionsImages.css';

const PaymentOptionsImages = () => {
  return (
    <div className="payment-options-container">
      {/* Wrap Image with an <a> tag for PayPal */}
      <a href="https://www.paypal.com/signin" target="_blank" rel="noopener noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/images/payment/paypal.png`} 
          alt="PayPal" 
          rounded 
          className="payment-option-image"
        />
      </a>

      {/* Wrap Image with an <a> tag for Stripe */}
      <a href="https://dashboard.stripe.com/login" target="_blank" rel="noopener noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/images/payment/stripe.png`}
          alt="Stripe" 
          rounded 
          className="payment-option-image"
        />
      </a>

        {/* Wrap Image with an <a> tag for Tikki */}
            <a href="https://www.abnamro.nl/en/personal/internet-and-mobile/apps/Tikkie/index.html" target="_blank" rel="noopener noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/images/payment/tikki.png`} 
          alt="Tikki" 
          rounded 
          className="payment-option-image"
        />
      </a>
      
      {/* Wrap Image with an <a> tag for Payoneer */}
              <a href="https://login.payoneer.com/" target="_blank" rel="noopener noreferrer">
        <Image 
          src={`${process.env.PUBLIC_URL}/images/payment/payoneer.png`} 
          alt="Payoneer" 
          rounded 
          className="payment-option-image"
        />
      </a>


    </div>
  );
};

export default PaymentOptionsImages;
