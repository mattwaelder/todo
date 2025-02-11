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
  const addToList = (e) => {
    e.preventDefault();
    //if no input
    if (currItem.length < 1) return;
    //if input
    let listCopy = [...list];
    let currNames = list.map((el) => el.name.toLowerCase());
    //ensure new element is unique
    if (currNames.indexOf(currItem.toLowerCase()) >= 0) {
      alert("already on your list");
      setCurrItem("");
      return;
    }
    //add to list
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
      <form onSubmit={(e) => addToList(e)}>
        <input
          onChange={(e) => setCurrItem(e.target.value)}
          type="text"
          placeholder="Add New Task?"
          value={currItem}
        ></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default App;

/*
make it presentable
make it work well on mobile
should make simple auth/user/db stuff. who cares if its not kept hosted anyway :]
*/
