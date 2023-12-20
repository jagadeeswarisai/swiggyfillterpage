import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Adjust the import path based on your project structure

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
