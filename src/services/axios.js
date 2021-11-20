import axios from 'axios';

export default axios.create({
  baseURL: 'https://discord-bot-web-app.vercel.app/',
  // baseURL: 'https://discord-bot-authentication.firebaseapp.com/',
  // baseURL: 'http://localhost:3001/',
});
