import { useState, useMemo } from "react";
import { Square, Circle, Triangle } from "./components/shapes";
import { ArcherContainer } from "react-archer";
import "./App.css";

const baseRelation = {
  targetAnchor: "middle",
  sourceAnchor: "middle",
  style: { strokeColor: "#3b82f6", strokeWidth: 5, endMarker: false },
};

function Grid() {
  var [selectedArr, setSelectedArr] = useState([]);
  var [gridRelations, setGridRelations] = useState(new Map());
  let [selectedSet, setSelectedSet] = useState(new Set([]));
  let handleShapeClick = (id) => {
    var currentRelation = gridRelations.get(id);
    if (!selectedArr.includes(id)) {
      if (selectedArr.length > 0) {
        if (!currentRelation) {
          currentRelation = [];
        }
        currentRelation.push({
          targetId: selectedArr[selectedArr.length - 1],
          targetAnchor: "middle",
          sourceAnchor: "middle",
          style: { strokeColor: "#3b82f6", strokeWidth: 5, endMarker: false },
        });
        gridRelations.set(id, currentRelation);
      }
      selectedSet.add(id);
      setSelectedArr([...selectedArr, id]);
    } else {
      if (selectedArr[selectedArr.length - 1] === id) {
        selectedSet.delete(id);
        const newSelectedArr = selectedArr.slice(0, selectedArr.length);
        newSelectedArr.pop();
        gridRelations.delete(id);

        setSelectedArr(newSelectedArr);
        return;
      }
    }
  };

  const reset = () => {
    setSelectedSet(new Set());
    setGridRelations(new Map());
    setSelectedArr([]);
  };

  let grid;
  // useMemo(() => {
  grid = [];
  for (let i = 1; i < 13; i++) {
    let squareId = `s${i}`;
    let circleId = `c${i}`;
    let triangleId = `t${i}`;
    grid.push(
      <div key={i} className="flex flex-col">
        <div className="flex flex-row justify-between">
          <Square
            id={squareId}
            isSelected={selectedSet.has(squareId)}
            onClick={handleShapeClick}
            color="#3b82f6"
            relations={gridRelations.get(squareId)}
          />
          <div className="size-10"></div>
          <Triangle
            id={triangleId}
            isSelected={selectedSet.has(triangleId)}
            onClick={handleShapeClick}
            color="#3b82f6"
            relations={gridRelations.get(triangleId)}
          />
        </div>
        <div className="flex justify-center">
          <Circle
            id={circleId}
            isSelected={selectedSet.has(circleId)}
            onClick={handleShapeClick}
            color="#3b82f6"
            relations={gridRelations.get(circleId)}
          />
        </div>
      </div>,
    );
  }
  // });

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <ArcherContainer>
          <div ref={parent} className="flex flex-col">
            {grid}
          </div>
        </ArcherContainer>
      </div>
      <button onClick={reset} className="w-auto h-9">
        Reset
      </button>
    </div>
  );
}

export default Grid;
