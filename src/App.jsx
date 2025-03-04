import { useState, useEffect } from "react";
import axios from "axios";
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
  const [currUser, setCurrUser] = useState("mattwaelder");
  const [list, setList] = useState(starterList);
  const [displayList, setDisplayList] = useState([]);
  const [currItem, setCurrItem] = useState("");
  //add to env later
  const BASE_URL = "http://localhost:3000";

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
    //push to server
    let pkg = { User: "me", task: currItem };

    axios
      .post(`${BASE_URL}/tasks`, pkg)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
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

  //INIT
  useEffect(() => {
    console.log("init");
    axios
      .get(`${BASE_URL}/users/?user=${currUser}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

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

for db, need to update psql via homebrew
need to create sql script for schema and populate some test tables
need to add basic server


had env issues. needed to update psql, but also needed to update path of psql in bash profile so that i could run psql commands. this took ages.
*/
