import { useState, useMemo } from "react";
import { Square, Circle, Triangle } from "./components/shapes";
import { ArcherContainer } from "react-archer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var [selectedArr, setSelectedArr] = useState([]);
  const reset = () => {
    window.location.reload()
  }
  let grid;
  useMemo(() => {
    grid = [];
    for (let i = 1; i < 13; i++) {
      grid.push(
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <Square id={`s${i}`} arr={selectedArr} setArr={setSelectedArr}  />
            <div className="size-10"></div>
            <Triangle
              onClick={() => {
                selectedArr.push(`t${i}`);
                setSelectedArr();
              }}
            />
          </div>
          <div className="flex justify-center">
            <Circle
              onClick={() => {
                selectedArr.push(`c${i}`);
                setSelectedArr();
              }}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <ArcherContainer>
          <div ref={parent} className="flex flex-col">
            {grid}
          </div>
        </ArcherContainer>
      </div>
      <button onClick={reset} className="w-auto h-9">Reset</button>
    </div>
  );
}

export default App;
