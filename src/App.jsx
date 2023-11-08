import { useRef } from "react";

const App = () => { 
  let demoRef = useRef();
  const change = () => {
    demoRef.current.src="https://placehold.co/400"
    demoRef.current.setAttribute("height", "200px");
    demoRef.current.setAttribute("width", "200px");
  }
  
  return (
    <div>
      <img src="https://placehold.co/600x400" ref={demoRef}/>
      <br/>
      <button onClick={()=>change()}>Click</button>
    </div>
  );
};

export default App;