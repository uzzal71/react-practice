import { useState } from "react";

const App = () => {
  let [FormValue, SetFormValue]=useState({
    fname:"",lname:"",city:"",gender:""
  });
  const InputOnChange=(InputName,InputValue)=>{
    
  }

  return (
    <div>
      
      <button>Add</button>
    </div>
  );
};

export default App;
