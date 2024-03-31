import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51OqL4WJ5D3pkpyU812oG9Saapy64hYeZCC2RRlADqSruvMIVnDwcJivP2FnLDUbIWYXvHSRzl8754aSoqexIaPGH00RGbSIYg7');

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await stripePromise;

    // Create a payment intent on the server
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
    });

    const { clientSecret } = await response.json();

    // Confirm the payment on the client side
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: stripe.elements.getElement('card'),
        billing_details: {
          name: 'John Doe', // Replace with actual user details
        },
      },
    });

    if (error) {
      console.error('Payment failed:', error);
    } else {
      console.log('Payment successful');
      // Redirect user to a success page or handle success scenario
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default PaymentForm;
