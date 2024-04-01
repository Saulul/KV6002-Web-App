import axios from 'axios';

const sendEmail = async (data) => {
  try {
    const response = await axios.post('https://apis-sk.vercel.app/api/send-email', data);
    console.log(response.data); // Log success message
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
