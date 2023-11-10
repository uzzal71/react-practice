import { useEffect } from "react";

const App = () => {
  useEffect(()=>{
    console.log("Hello world!")
  },[]);
  
  return (
    <div className="container">
      
    </div>
  );
};

export default App;
