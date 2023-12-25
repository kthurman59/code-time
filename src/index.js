// index.js
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App'; // Import the main App component

const root = createRoot(document.getElementById('root')); // Create a root instance

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
