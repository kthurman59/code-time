// App.js
import React, { useState } from 'react';
import TimerButton from './TimerButton';
import './App.css'; // Import the CSS file

const App = () => {
  const [displayString, setDisplayString] = useState('');

  const updateDisplayString = () => {
    setDisplayString('Your string here');
  };

  return (
    <div>
      <h1>CODE TIME!</h1>
      <TimerButton onClick={updateDisplayString} />
      <div className="problem-container">{displayString}</div> {/* Apply the CSS class */}
    </div>
  );
};

export default App;

