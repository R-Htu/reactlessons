import React, { useState } from 'react';
import './Challenge2.css';

const Challenge2 = () => {
  const [myList, setMyList] = useState([1, 2, 3, 4, 5]);

  /*const increase = () => {
    myList.push(myList.length + 1);  // Directly modifying the state (incorrect)
    setMyList(myList);  // State isn't updated properly
  };
  What happens if you use a new box to change the toys?
Now, imagine instead of just changing the toys in the old box, you get a new box and put all the toys from the old box into the new box, plus one new toy. When you give this new box to your helper, the helper says, "Oh! This is a new box, so the toys inside must have changed!" Then, your helper will update the picture and show the new list of toys on the screen.

The Important Part:
React is like a helper that looks at your box (the state). It doesn’t care about the toys inside the box, it just cares about whether the box itself has changed. When the box changes (like when you create a new one), React knows to update the picture on the screen.

If you change the toys inside the old box without getting a new one, React can’t tell that anything changed, and nothing shows up on the screen.

So, that's why we create a new box (with the spread operator [...] or other methods) when we want to update the state! It tells React, "Hey, something’s different, update the screen!"*/
  const increase = () =>{
    setMyList(prevList => [...prevList, prevList.length+1]);
  }

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

