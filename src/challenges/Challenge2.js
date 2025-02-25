import React, { useState } from 'react';
import './Challenge2.css';

const Challenge2 = () => {
  const [myList, setMyList] = useState([1, 2, 3, 4, 5]);

  const increase = () => {
    setMyList(prevList => [...prevList, prevList.length + 1]);
  };

  const decrease = () => {
    setMyList(prevList => prevList.slice(0, -1));
  };

  return (
    <div className='container'>
      <h1>Challenge 2</h1>
      <p>My List: <span>{myList.join(', ')}</span></p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Challenge2;

