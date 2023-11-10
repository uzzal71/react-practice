import { useState } from "react";

const App = () => {
  let [FormValue, SetFormValue]=useState({
    fname:"",lname:"",city:"",gender:""
  });
  const InputOnChange=(InputName,InputValue)=>{
    SetFormValue(FormValue=>({
      ...FormValue,
      [InputName]:InputValue
    }));
  }
  const FormSubmit=(e)=>{
    e.preventDefault();
    alert(JSON.stringify(FormValue));
  }

  return (
    <div>
      
      <button>Add</button>
    </div>
  );
};

export default App;
