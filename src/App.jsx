import { useRef } from "react";

const App = () => { 
  let myUseRef = useRef();
  const change = () => {
    myUseRef.innerHTML="<ul><li>A</li><li>B</li></ul>";
  }
  
  return (
    <div>
      <h1 ref={(h1)=>myUseRef=h1}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;