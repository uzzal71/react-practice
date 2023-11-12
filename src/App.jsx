import { useRef } from "react";

const App = () => {
  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.innerHTML="<ul><li>A</li><li>B</li></ul>";
  }
  
  return (
    <div>
      <h1 ref={(h1) => myHeadLine=h1}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
