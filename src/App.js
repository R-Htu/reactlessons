import React, { useState } from "react";
import Challenge1 from ".//challenges/Challenge1";
import Challenge2 from ".//challenges/Challenge2";

let App = ()=>{
    const [currentChallenge, setCurrentChallenge] = useState(null);

    const handleChallenge1 = ()=> setCurrentChallenge(<Challenge1 />);
    const handleChallenge2 = ()=> setCurrentChallenge(<Challenge2 />);


    return(
        <div>
            <button onClick={handleChallenge1}>Challenge 1</button>
            <button onClick={handleChallenge2 }>Challenge 2</button>
            {currentChallenge}
        </div>

    );
}



export default App;