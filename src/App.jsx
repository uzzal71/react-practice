import { useEffect, useState } from "react";

const App = () => {
  let [data, setData]=useState([]);

  useEffect(()=>{
    (async () => {
      const response = await fetch('https://dummyjson.com/products/1');
      let result = await response.json();
      setData(result);
    })()
  },[]);
  
  return (
    <div className="container">
      {JSON.stringify(data)}
    </div>
  );
};

export default App;
