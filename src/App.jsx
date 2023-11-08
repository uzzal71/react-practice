import { useRef } from "react";

const App = () => { 
  let firstNmae, lastName = useRef();
  const change = () => {
    let fName = firstNmae.value;
    let lName = lastName.value;

    alert(fName + " " + lName);
  }
  
  return (
    <div>
      <input ref={(a)=>firstNmae=a} placeholder="First Name"/><br/>
      <input ref={(a)=>lastName=a} placeholder="Last Name"/><br/>
      <button onClick={()=>change()}>Click</button>
    </div>
  );
};

export default App;