import { useRef } from "react";

const App = () => {
  let counter = useRef(0);
  
  return (
    <div>
      <h1>Counter: {counter.current}</h1>
    </div>
  );
};

export default App;
