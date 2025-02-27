import React, { useState } from 'react';
import './Challenge4.css';

const Challenge4 = () => {
  const [input, setInput] = useState('Are you okay?');
  const [warningVisible, setWarningVisible] = useState(false);

  let handleText = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    setWarningVisible(newInput.trim() === "");
  };

  return (
    <div className='challenge-wrapper'>
      <div className='input-container'>
        <h1>Challenge 4</h1>
        <p className='user-input-message'>{input}</p>
        <input
          type="text"
          onChange={handleText}
          placeholder="Type something..."
          className={warningVisible ? 'warning' : ''}
        />
        {warningVisible && (
          <p className='input-validation-message'>
            Please Type Something!
          </p>
        )}
      </div>
    </div>
  );
};

export default Challenge4;
