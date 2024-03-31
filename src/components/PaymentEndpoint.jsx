

const stripe = require('stripe')('sk_test_51OqL4WJ5D3pkpyU8EA5UfrD9YCcEcw009UPSbs35duTGEdLRAUPnilWDSHI9Omw2M9wOf1FMYSI29TKN2civUwum00MA9OMIzz');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint to handle webhook events
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'your_webhook_secret');
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.sendStatus(400);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Process successful payment, e.g., update your database, send confirmation email
      console.log('Payment succeeded:', paymentIntent);
      break;
    case 'payment_intent.payment_failed':
      const failedPaymentIntent = event.data.object;
      // Handle failed payment
      console.log('Payment failed:', failedPaymentIntent);
      break;
    // Add more cases for other event types as needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
