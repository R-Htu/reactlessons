import './App.css';
import Challenge5 from './challenges/Challenge5.jsx';
import { useState } from 'react';

function App() {
  const [currentChallenge, setCurrentChallenge] = useState(null); // Corrected typo in state variable name

  const handleChallenge5 = () => setCurrentChallenge(<Challenge5 />); // Set the JSX component directly

  return (
    <>
      <button onClick={handleChallenge5}>Challenge 5</button>
      
      {/* Conditionally render the current challenge */}
      {currentChallenge}
    </>
  );
}

export default App;
