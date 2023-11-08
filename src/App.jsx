import { useRef } from "react";

const App = () => { 
  let demoRef = useRef(0);
  const change = () => {
    demoRef.current++;
    console.log(`Clicked ${demoRef.current} times`);
  }
  
  return (
    <div>
      <h1></h1>
      <button onClick={()=>change()}>Click</button>
    </div>
  );
};

export default App;