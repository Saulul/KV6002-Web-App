import axios from 'axios';

const sendEmail = async (to, subject, text, html) => {
  try {
    const response = await axios.post('https://apis-sk.vercel.app/api/send-email', to, subject, text, html);
    // const response = await axios.post('http://localhost:5174/api/sendEmail', data); -- for testing
    console.log(response.data); // Log success message
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
