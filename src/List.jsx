import { useState } from "react";
import "./App.scss";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";

const List = ({ list, removeFromList, handlePin }) => {
  //transform list from props to have pinned always first
  // console.log(listPinned, listUnpinned);

  return (
    <>
      <div className="listBody">
        {list.map((item, i) => (
          <ul className="listItem" key={`list-${item.name}`}>
            <li className={item.isPinned ? "pinned" : ""}>{item.name}</li>
            <button onClick={() => handlePin(item, i)}>
              {" "}
              {item.isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
            </button>
            <button onClick={() => removeFromList(i)}>x</button>
          </ul>
        ))}
      </div>
    </>
  );
};

export default List;
