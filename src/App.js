import React, { useState } from "react";
import Challenge1 from ".//challenges/Challenge1";
import Challenge2 from ".//challenges/Challenge2";
import Challenge3 from ".//challenges/Challenge3";
import Challenge4 from ".//challenges/Challenge4";

let App = ()=>{
    const [currentChallenge, setCurrentChallenge] = useState(null);

    const handleChallenge1 = ()=> setCurrentChallenge(<Challenge1 />);
    const handleChallenge2 = ()=> setCurrentChallenge(<Challenge2 />);
    const handleChallenge3 = ()=> setCurrentChallenge(<Challenge3 />);
    const handleChallenge4 = ()=> setCurrentChallenge(<Challenge4 />);


    return(
        <div>
            <button onClick={handleChallenge1}>Challenge 1</button>
            <button onClick={handleChallenge2 }>Challenge 2</button>
            <button onClick={handleChallenge3 }>Challenge 3</button>
            <button onClick={handleChallenge4 }>Challenge 4</button>
            {currentChallenge}
        </div>

    );
}



export default App;