import React from "react";
import { useState } from "react";
import { ArcherElement } from "react-archer";

const baseRelation = {
  targetAnchor: 'middle',
  sourceAnchor: 'middle',
  style: { strokeColor: "#3b82f6", strokeWidth: 5, endMarker: false  },
};
const Square = ({ id, arr, setArr, reset }) => {
  const [isClicked, setIsClicked] = useState(false);
  let [relations, setRelations] = useState([]);
  if(reset) {
    relations = []
    reset = false
    setIsClicked(false);
  }
  const handleClick = () => {
    let selected = !isClicked;
    if (selected) {
      setIsClicked(selected);
      if (arr.length > 0) {
        let relation = { ...baseRelation, targetId: arr[arr.length - 1] };
        setRelations([...relations, relation]);
      }
      arr.push(id);
      setArr(arr);
    } else {
      if (arr[arr.length - 1] == id) {
        setIsClicked(selected);
        setRelations([])
        arr.pop();
      }
    }

  };
  return (
    <ArcherElement id={id} relations={relations}>
      <div className="p-2">
        <div
          onClick={handleClick}
          className={`w-10 h-10 flex items-center justify-center  ${
            isClicked ? "bg-blue-500" : "bg-slate-300"
          }
          ${isClicked ? "" : "hover:bg-slate-400"}`}
        >
          <div className="-z-10 size-2"></div>
        </div>
      </div>
    </ArcherElement>
  );
};

const Circle = (id) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="">
      <div
        onClick={handleClick}
        className={`p-3 w-10 items-center justify-center h-10 rounded-full  ${
          isClicked ? "" : "hover:bg-slate-400"
        } ${isClicked ? "bg-blue-500" : "bg-slate-300"}`}
      ></div>
    </div>
  );
};

const Triangle = (id, onClick) => {
  let height = (Math.sqrt(3) / 2) * 42;
  let h = height.toString().substring(0, 4);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <div className="p-2 items-center justify-center">
      <div
        onClick={handleClick}
        className={`size-0
        border-l-[21px] border-l-transparent
        border-r-[21px] border-r-transparent
        border-b-[34.6px] ${
          isClicked ? "border-b-blue-500" : "border-b-slate-300"
        }
        ${isClicked ? "" : "hover:border-b-slate-400"}
        `}
      >
        <div className="-z-10 size-2 relative left-[0.3px] top-4  "></div>
      </div>
    </div>
  );
};

export { Square, Circle, Triangle };
