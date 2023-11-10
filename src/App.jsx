import { useEffect, useState } from "react";

const App = () => {
  let [Data, SetData]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products/1')
      .then(res=>res.json())
      .then(json=>SetData(json));
  },[1]);
  
  return (
    <div className="container">
      {JSON.stringify(Data)}
    </div>
  );
};

export default App;
