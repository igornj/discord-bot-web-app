import axios from 'axios';

export default axios.create({
  baseURL: 'https://discord-bot-upload-2.herokuapp.com/',
  // baseURL: 'https://discord-bot-authentication.firebaseapp.com/',
  // baseURL: 'http://localhost:3001/',
});
