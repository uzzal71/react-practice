import { useRef } from "react";

const App = () => {
  let myHeadLine = useRef();
  
  return (
    <div>
      <h1 id="myHeadList"></h1>
    </div>
  );
};

export default App;
