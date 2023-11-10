import { useState } from "react";

const App = () => { 
  let [list, setList] = useState([]);
  let [item, setItem] = useState({});

  return (
    <div>
      <input placeholder="Item"/>
      <button>Add</button>
    </div>
  );
};

export default App;