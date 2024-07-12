import { apiUrl } from '@/config';
import axios from '@/utils/axios';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const AuthContext = createContext<any>(null);

// Create a provider component
export const AuthProvider = ({ children }:{ children:any }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

    useEffect(() => {
      if (authToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    }, [authToken]);
  
    const handleLogin = async (username:string, password:string) => {
      try {
        const response = await axios.post(`${apiUrl ?? 'https://calculator-api-vq61.onrender.com/api/v1'}/users/login`, { username, password });
        const token = response.data;
        
        if(!token) 
          return false; 
  
        localStorage.setItem('authToken', token);
        setAuthToken(token);
  
        return true;
  
      } catch (error) {
        // alert(`Login failed with reason ${error}`);
        console.error('Login failed:', error);
        return false;
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('authToken');
      setAuthToken(null);
    };

  return (
    <AuthContext.Provider value={{ authToken, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};