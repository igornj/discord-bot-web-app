/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import axios from 'axios';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin() {
    const { data: token } = await axios.post('http://localhost:3001/login');
    console.log(token);
    localStorage.setItem('token', JSON.stringify(token));
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context };
