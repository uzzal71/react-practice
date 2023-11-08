import { useRef } from "react";

const App = () => { 
  const myUseRef = useRef();
  const change = () => {
    myUseRef.current.innerHTML="<ul><li>A</li><li>B</li></ul>";
  }
  
  return (
    <div>
      <h1 ref={myUseRef}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;