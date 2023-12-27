// index.js
import React from 'react';
import ReactDOM from 'react-dom'; // Import the ReactDOM library
import App from './App'; // Import the main App component
import TimerButton from './TimerButton'; // Import the TimerButton component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root instance

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
