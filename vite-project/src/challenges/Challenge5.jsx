import { useState } from 'react';
import './Challenge.css';

const Challenge5 = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [displayInput, setDisplayInput] = useState('');

  const handleBtnClick = () => {
    setDisplayInput(input); 
    setCount(input.length); 
  };

  return (
    <div className='challenge5-container'>
      <h1>Challenge 5</h1>
      <input
        type="text"
        value={input}
        placeholder="Type anything you like"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleBtnClick}>+</button>
      {displayInput && <p>The current value is: {input}</p>}
      <p>The current count is: {count}</p>
    </div>
  );
};

export default Challenge5;
