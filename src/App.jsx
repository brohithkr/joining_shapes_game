import { useState, useRef, useEffect, useMemo } from "react";
import { Square, Circle, Triangle } from "./components/shapes";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let grid = [];
  for (let i = 0; i < 12; i++) {
    grid.push(
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <Square />
          <div className="size-10"></div>
          <Triangle />
        </div>
        <div className="flex justify-center">
          <Circle />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* <svg className="z-10  ">
        <line x1={0} y1={0} x2={100} y2={300} stroke="black"></line>
      </svg> */}
      <div className="flex flex-col">
        {grid}
      </div>
    </div>
  );
}

export default App;
