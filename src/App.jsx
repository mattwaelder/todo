import { useState, useEffect } from "react";
import "./App.scss";
import List from "./List.jsx";

function App() {
  let starterList = [
    { name: "torpedo", isPinned: true },
    { name: "banana", isPinned: false },
    { name: "orange", isPinned: false },
    { name: "monkeys", isPinned: false },
    { name: "waffles", isPinned: true },
  ];
  const [list, setList] = useState(starterList);
  const [displayList, setDisplayList] = useState([]);
  const [currItem, setCurrItem] = useState("");

  //////////////////////////// Functions //////////////////////////////////
  const addToList = () => {
    let listCopy = [...list];
    let currNames = list.map((el) => el.name.toLowerCase());
    if (currNames.indexOf(currItem.toLowerCase()) >= 0) {
      alert("already on your list");
      setCurrItem("");
      return;
    }
    //add user input to list
    listCopy.push({ name: `${currItem}`, isPinned: false });
    setList(listCopy);
    //reset
    setCurrItem("");
  };

  const removeFromList = (index) => {
    let listCopy = Array.from(displayList);
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  const handlePin = (item, index) => {
    let listCopy = [...displayList];
    listCopy[index].isPinned = !listCopy[index].isPinned;
    setList(listCopy);
  };
  //////////////////////////// Effect //////////////////////////////////

  useEffect(() => {
    let pinned = [];
    let unpinned = [];
    list.forEach((el) => (el.isPinned ? pinned.push(el) : unpinned.push(el)));

    setDisplayList([...pinned, ...unpinned]);
  }, [list]);

  //////////////////////////////////////////////////////////////

  return (
    <div>
      <h2>To-Do</h2>
      <List
        list={displayList}
        removeFromList={removeFromList}
        handlePin={handlePin}
      ></List>
      <input
        onChange={(e) => setCurrItem(e.target.value)}
        type="text"
        placeholder="Add New Task?"
        value={currItem}
      ></input>
      <button onClick={() => addToList()}>+</button>
    </div>
  );
}

export default App;

/*
older items should move up
pinned items should be displayed first
hitting enter should add items to list
should start doing some version control...
*/
