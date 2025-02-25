import React, { useState, useEffect } from 'react';
import './Challenge1.css'; 

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const test = (name = "Lotus") => {
    console.log(`My name is ${name}`);
  };

  useEffect(() => {
    test("UrWorld");
  }, []);

  return (
    <div className="app-container">
      <h1>Challenge 1</h1>
      <div>
        <p>Are you okay?: <span className="count-display">{count}</span></p>
      </div>
      <div className="button-container">
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </div>
  );
};

export default App;
