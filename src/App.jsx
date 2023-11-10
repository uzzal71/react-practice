import { useState } from "react";

const App = () => {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const AddToList = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <ul>
        {list.length > 0 ? (
          list.map((element, index) => (
            <li key={index}>
              {element}
              <span
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => {
                  RemoveItem(index);
                }}
              >
                Remove
              </span>
            </li>
          ))
        ) : null}
      </ul>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Item"
      />
      <button onClick={AddToList}>Add</button>
    </div>
  );
};

export default App;
