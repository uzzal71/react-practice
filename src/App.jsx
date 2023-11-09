import { useRef } from "react";

const App = () => { 
  let expensiveResultRef = useRef(null);
  let myDivRef = useRef(null);

  const fetchData = async () => {
    let response = await fetch('https://dummyjson.com/products');
    expensiveResultRef.current = await response.json();
  }

  const ShowData = () => {
    myDivRef.current.innerHTML = JSON.stringfy(expensiveResultRef.current);
  }
  
  
  return (
    <div>
      <div ref={myDivRef}></div>
      <button onClick={ShowData}>Call Api</button>
      <button onClick={fetchData}>Show Div</button>
    </div>
  );
};

export default App;