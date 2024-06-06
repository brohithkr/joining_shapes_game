import React from "react";
import { useState, ReactNode } from "react";
import { ArcherElement } from "react-archer";
import colors from "../utlis/colors";

const synth = window.speechSynthesis;

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
        className={`${(id.substring(0,1) == "c") ? "" : "p-2"}`}
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex justify-center items-center">{children({color: colors.getRgb(finalColor)})}</div>
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
      color={(() => {return color;})()} 
      children={SquareSvg}
    />
  );
}

export function Circle({ id, isSelected, relations, onClick, color }) {
  return (
    <Shape
      id={id}
      isSelected={isSelected}
      relations={relations}
      onClick={onClick}
      color={color}
      children={CircleSvg}
    />
  );
}

export function Triangle({ id, isSelected, relations, onClick, color }) {
  return (
    <Shape
      id={id}
      isSelected={isSelected}
      relations={relations}
      onClick={onClick}
      color={color}
      children={TriangleSvg}
    />
  );
}

export function Hexagon({ id, isSelected, relations, onClick, color }) {
  return (
    <Shape
      id={id}
      isSelected={isSelected}
      relations={relations}
      onClick={onClick}
      color={color}
      children={HexagonSvg}
    />
  );
}


/**
 * 
 * @param {Object} props 
 * @param {String} props.color
 * @returns 
 */
function SquareSvg({color}) {
  return (
    <svg width="40" height="40">
      <rect width="40" height="40" style={{fill: color}} />
    </svg>
  );
}

/**
 *
 * @param {Object} props
 * @param {String} props.color
 * @returns
 */
function CircleSvg({color}) {
  return (
    <svg width="40" height="40">
      <circle cx="20" cy="20" r="20" style={{fill: color}} />
    </svg>
  );
}

/**
 *
 * @param {Object} props
 * @param {String} props.color
 * @returns
 */
function TriangleSvg({color}) {
  return (
    <svg width="40" height="40">
      <polygon points="20,1 1,39 39,39" style={{fill: color}} />
    </svg>
  );
}

/**
 *
 * @param {Object} props
 * @param {String} props.color
 * @returns
 */
function HexagonSvg({color}) {
  return (
    <svg width="40" height="40">
      <polygon points="20,1 35,10 35,30 20,39 5,30 5,10" style={{fill: color}} />
    </svg>
  );
}






// export function Circle({ id, isSelected, relations, onClick, color }) {
//   const [hover, setHover] = useState(false);
//   const finalColor = isSelected ? color : hover ? "#94a3b8" : "#cbd5e1";

//   const handleClick = () => {
//     onClick(id);
//   };
//   if (relations) {
//     for (let i of relations) {
//       i.style.strokeColor = color;
//     }
//   }
//   return (
//     <ArcherElement id={id} relations={relations}>
//       <div className="">
//         <div
//           onClick={handleClick}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//           style={{ backgroundColor: finalColor }}
//           className={`p-3 w-10 items-center justify-center h-10 rounded-full  ${
//             isSelected ? "" : "hover:bg-slate-400"
//           }`}
//         ></div>
//       </div>
//     </ArcherElement>
//   );
// }

// export function Triangle({ id, isSelected, relations, onClick, color }) {
//   const [hover, setHover] = useState(false);
//   const finalColor = isSelected ? color : hover ? "#94a3b8" : "#cbd5e1";
//   let speech = new SpeechSynthesisUtterance("triangle")
//   speech.voice
//   speech.onstart = () => {
//     console.log("spoken")
//   }
//   const handleClick = () => {    
//     console.log(window.speechSynthesis)
//     synth.speak(speech);
//     console.log("spoken")
//     onClick(id);

//   };
//   if (relations) {
//     for (let i of relations) {
//       i.style.strokeColor = color;
//     }
//   }

//   return (
//     <div className="p-2 items-center justify-center">
//       <ArcherElement id={id} relations={relations}>
//         <div
//           onClick={handleClick}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//           style={{ borderBottomColor: finalColor }}
//           className={`size-0
//           border-l-[21px] border-l-transparent
//           border-r-[21px] border-r-transparent
//           border-b-[34.6px]
//           `}
//         >
//           <div className="-z-10 size-2 relative left-[0.3px] top-4"></div>
//         </div>
//       </ArcherElement>
//     </div>
//   );
// }

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
