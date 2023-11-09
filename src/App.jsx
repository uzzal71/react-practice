import { useRef } from "react";

const App = () => { 
  let expensiveResultRef = useRef(null);
  let myDivRef = useRef();

  const fetchData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    expensiveResultRef.current = await response.json();
  }

  const ShowData = () => {
    myDivRef.current.innerHTML = JSON.stringify(expensiveResultRef.current);
  }
  
  
  return (
    <div>
      <div ref={myDivRef}></div>
      <button onClick={fetchData}>Call Api</button>
      <button onClick={ShowData}>Show Data</button>
    </div>
  );
};

export default App;