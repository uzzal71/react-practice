import { useRef } from "react";

const App = () => { 
  let myHeadLine = useRef();
  const change = () => {
    myHeadLine.classList.add('text-danger');
    myHeadLine.classList.remove('text-success');
  }
  
  return (
    <div>
      <h1 className="text-success" ref={(h1)=>myHeadLine=h1}>This is head line</h1>
      <button onClick={()=>change()}>Click</button>
    </div>
  );
};

export default App;