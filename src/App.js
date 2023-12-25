// App.js
import React, { useState } from 'react';
import TimerButton from './TimerButton'; // Import the TimerButton component

const App = () => {
  const [displayString, setDisplayString] = useState(''); // State to hold the display string

  // Function to update the displayed string
  const updateDisplayString = () => {
    setDisplayString('Your string here'); // Update the string as needed
  };

  return (
    <div>
      <h1>CLICK BUTTON FOR A PROBLEM</h1>
      <TimerButton onClick={updateDisplayString} /> {/* Pass a function to update the string */}
      <div>{displayString}</div> {/* Display the string in a div */}
    </div>
  );
};

export default App;
