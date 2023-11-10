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
    <div className="container">
      <form onSubmit={FormSubmit} className="form">
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">First name</label>
          <input placeholder="First name" value={FormValue.fname} onChange={(e)=>InputOnChange('fname',e.target.value)} name="fname" className="form-control"/>
        </div>

        <div className="mb-3">
          <label htmlFor="fname" className="form-label">Last name</label>
          <input placeholder="Last name" value={FormValue.lname} onChange={(e)=>InputOnChange('lname',e.target.value)} name="lname" className="form-control"/>
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select value={FormValue.city} onChange={(e)=>InputOnChange('city', e.target.value)} className="form-control">
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
        </select>
        </div>

        <div className="form-check">
          <input checked={FormValue.gender==="Male"} onChange={(e)=>InputOnChange('gender','Male')} className="form-check-input" type="radio" name="gender"/>
          <label className="form-check-label" htmlFor="gender">Male</label>
        </div>
        <div className="form-check">
          <input checked={FormValue.gender==="Female"} onChange={(e)=>InputOnChange('gender','Female')} className="form-check-input" type="radio" name="gender"/>
          <label className="form-check-label" htmlFor="gender">Female</label>
        </div>


        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
