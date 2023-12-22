"use client"
import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const useError = () => {
  return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('');

  const setErrorMessage = (message) => {
    setError(message);
  };

  const clearError = () => {
    setError('');
  };

  return (
    <ErrorContext.Provider value={{ error, setErrorMessage, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
