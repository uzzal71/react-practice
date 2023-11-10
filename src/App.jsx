import { useState } from "react";

const App = () => { 
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const AddToList=()=>{
    list.push(item);
    setList([...list]);
    setItem("");
  }

  const RemoveItem=(index)=>{
    list.pop(index);
    setList([...list]);
  }

  return (
    <div>
      <ul>
        {
          list.length > 0 ? list.map((element, index)=> {
            return <li key={index}>{element} 
            <span style={{ cursor: "pointer", color: "red" }} onClick={()=>{RemoveItem(index)}}>Remove</span>
            </li>
          }) : null
        }
      </ul>
      <input onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
      <button onClick={AddToList}>Add</button>
    </div>
  );
};

export default App;