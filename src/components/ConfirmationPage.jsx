import React from 'react';
import { Link } from 'react-router-dom';

function PurchaseConfirmation() {
  return (
    <div className="purchase-confirmation-container">
      <div className="purchase-confirmation">
        <h2>Thank you for your purchase!</h2>
        <p>Your tickets have been successfully purchased.</p>
        <div className="confirmation-options">
          <p>What would you like to do next?</p>
          <div>
            <Link to="/" className="option-link">Return to Home Page</Link>
            <Link to="/purchase-history" className="option-link">View Purchase History</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
