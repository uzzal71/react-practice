import { useState } from "react";

const App = () => { 
  let [number, setNumber] = useState(0);
  
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={()=>setNumber(number+1)}>Increment</button>
      <button onClick={()=>setNumber(number-1)}>Decrement</button>
    </div>
  );
};

export default App;