import { useRef } from "react";

const App = () => { 
  let firstNmae, lastName = useRef();
  const change = () => {
    
  }
  
  return (
    <div>
      <input ref={firstNmae} placeholder="First Name"/><br/>
      <input ref={lastName} placeholder="Last Name"/><br/>
      <button onClick={()=>change()}>Click</button>
    </div>
  );
};

export default App;