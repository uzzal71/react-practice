import { useRef } from "react";

const App = () => { 
  let firstNmae = useRef();
  let lastName = useRef();
  
  const change = () => {
    let fName = firstNmae.current.value;
    let lName = lastName.current.value;

    alert(fName + " " + lName);
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