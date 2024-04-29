import React from "react";
import { useState } from "react";
import { ArcherElement } from "react-archer";
import colors from "../utlis/colors";

const baseRelation = {
  targetAnchor: "middle",
  sourceAnchor: "middle",
  style: { strokeColor: "#3b82f6", strokeWidth: 5, endMarker: false },
};

function handleShapeClick(
  id,
  isClicked,
  setIsClicked,
  arr,
  setArr,
  relations,
  setRelations
) {
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
      setRelations([]);
      arr.pop();
    }
  }
}

/**
 *
 * @param {Object} props
 * @param {String} props.id
 * @param {boolean} props.isSelected
 * @param {Array<Object>} props.relations
 * @param {(id: String) => void} props.onClick
 * @param {string} props.color
 */
function Square({ id, isSelected, relations, onClick, color }) {
  const handleClick = () => {
    onClick(id);
  };
  if (relations) {
    for (let i of relations) {
      i.style.strokeColor = color;
    }
  }
  return (
    <ArcherElement id={id} relations={relations}>
      <div className="p-2">
        <div
          onClick={handleClick}
          style={{ backgroundColor: isSelected ? color : colors.lightGrey }}
          className={`w-10 h-10 flex items-center justify-center  
          ${isSelected ? "" : "hover:bg-slate-400"}`}
        >
          <div className="-z-10 size-2"></div>
        </div>
      </div>
    </ArcherElement>
  );
}

const Circle = ({ id, isSelected, relations, onClick, color }) => {
  const handleClick = () => {
    onClick(id);
  };
  if (relations) {
    for (let i of relations) {
      i.style.strokeColor = color;
    }
  }
  return (
    <ArcherElement id={id} relations={relations}>
      <div className="">
        <div
          onClick={handleClick}
          style={{ backgroundColor: isSelected ? color : colors.lightGrey }}
          className={`p-3 w-10 items-center justify-center h-10 rounded-full  ${
            isSelected ? "" : "hover:bg-slate-400"
          }`}
        ></div>
      </div>
    </ArcherElement>
  );
};

const Triangle = ({ id, isSelected, relations, onClick, color }) => {
  const [hover, setHover] = useState(false);
  const finalColor = isSelected ? color : hover ? "#94a3b8" : "#cbd5e1";

  const handleClick = () => {
    onClick(id);
  };
  if (relations) {
    for (let i of relations) {
      i.style.strokeColor = color;
    }
  }

  return (
    <div className="p-2 items-center justify-center">
      <ArcherElement id={id} relations={relations}>
        <div
          onClick={handleClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`size-0
        border-l-[21px] border-l-transparent
        border-r-[21px] border-r-transparent
        border-b-[34.6px]
        `}
          style={{ borderBottomColor: finalColor }}
        >
          <div className="-z-10 size-2 relative left-[0.3px] top-4"></div>
        </div>
      </ArcherElement>
    </div>
  );
};

export { Square, Circle, Triangle };
