import React from "react";
import { useState, ReactNode } from "react";
import { ArcherElement } from "react-archer";
import colors from "../utlis/colors";

const baseRelation = {
  targetAnchor: "middle",
  sourceAnchor: "middle",
  style: { strokeColor: "#3b82f6", strokeWidth: 5, endMarker: false },
};

/**
 * Holds all common properties of Shapes like hover, lines, color etc
 * @param {Object} props
 * @param {String} props.id
 * @param {boolean} props.isSelected
 * @param {Array<Object>} props.relations
 * @param {(id: String) => void} props.onClick
 * @param {string} props.color
 * @param {ReactNode} props.children Specific element that renderd to a shape
 */
function Shape({ id, isSelected, relations, onClick, color, children }) {
  const [hover, setHover] = useState(false);
  const finalColor = isSelected ? color : hover ? "#94a3b8" : "#cbd5e1";

  const handleClick = () => {
    onClick(id);
    console.log("worked");
  };
  if (relations) {
    for (let i of relations) {
      i.style.strokeColor = color;
    }
  }
  return (
    <ArcherElement id={id} relations={relations}>
      <div
        className="p-2"
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{ backgroundColor: finalColor }}>{children}</div>
      </div>
    </ArcherElement>
  );
}

export function Square({ id, isSelected, relations, onClick, color }) {
  return (
    <Shape
      id={id}
      isSelected={isSelected}
      relations={relations}
      onClick={onClick}
      color={color}
    >
      <div className="w-10 h-10 flex items-center justify-center"></div>
    </Shape>
  );
}

export function Circle({ id, isSelected, relations, onClick, color }) {
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
    <ArcherElement id={id} relations={relations}>
      <div className="">
        <div
          onClick={handleClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ backgroundColor: finalColor }}
          className={`p-3 w-10 items-center justify-center h-10 rounded-full  ${
            isSelected ? "" : "hover:bg-slate-400"
          }`}
        ></div>
      </div>
    </ArcherElement>
  );
}

export function Triangle({ id, isSelected, relations, onClick, color }) {
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
          style={{ borderBottomColor: finalColor }}
          className={`size-0
          border-l-[21px] border-l-transparent
          border-r-[21px] border-r-transparent
          border-b-[34.6px]
          `}
        >
          <div className="-z-10 size-2 relative left-[0.3px] top-4"></div>
        </div>
      </ArcherElement>
    </div>
  );
}

export function Circle2({ id, isSelected, relations, onClick, color }) {
  return (
    <Shape
      id={id}
      isSelected={isSelected}
      relations={relations}
      onClick={onClick}
      color={color}
    >
      <div className="p-3 w-10 bg-black items-center justify-center h-10 rounded-full"></div>
    </Shape>
  );
}

// export { Square, Circle, Triangle };
