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
      <form onSubmit={FormSubmit}>
        <input placeholder="First name" value={FormValue.fname} onChange={(e)=>InputOnChange('fname',e.target.value)}/>
        <input placeholder="Last name" value={FormValue.lname} onChange={(e)=>InputOnChange('lname',e.target.value)}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
