import React from "react";
import { useState } from "react";
const Square = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
    console.log("hello");
  };
  return (
    <div className="p-2">
      <div
      onClick={handleClick}
        className={`w-10 h-10  ${
          isClicked ? "bg-blue-500" : "bg-slate-300"
        }
        ${isClicked ? "" : "hover:bg-slate-400"}`}
      ></div>
    </div>
  );
};

const Circle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="">
      <div
      onClick={handleClick} 
        className={`p-3 w-10 h-10 rounded-full  ${
          isClicked ? "" : "hover:bg-slate-400"
        } ${isClicked ? "bg-blue-500" : "bg-slate-300"}`}
      ></div>
    </div>
  );
};

const Triangle = () => {
  let height = (Math.sqrt(3) / 2) * 42;
  let h = height.toString().substring(0, 4);
  console.log(h);
  console.log("hello")
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    
    <div className="p-2">
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
      ></div>
    </div>
  );
};

export { Square, Circle, Triangle };
