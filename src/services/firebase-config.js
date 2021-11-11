import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

require('dotenv').config();

const app = initializeApp({
  apiKey: 'AIzaSyAFa9bsCU22wLNY8USKmjeOUV6FF5udbzw',
  authDomain: 'discord-bot-authentication.firebaseapp.com',
  projectId: 'discord-bot-authentication',
  storageBucket: 'discord-bot-authentication.appspot.com',
  messagingSenderId: '907618033204',
  appId: '1:907618033204:web:ee2ff0cc8f9ccdd5ca7461',
  measurementId: 'G-TF0W6620HV',
});

export const auth = getAuth();
export default app;
