import { useRef } from "react";

const App = () => {
  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.innerText="Hello world";
  }
  
  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
