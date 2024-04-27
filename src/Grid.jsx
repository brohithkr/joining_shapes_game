import { useState, useMemo } from "react";
import { Square, Circle, Triangle } from "./components/shapes";
import { ArcherContainer } from "react-archer";
import "./App.css";

/**
 * @typedef {'vertical' | 'horizontal'} Orientation
 */

/**
 *
 * @param {Object} props
 * @param {Orientation} props.orientation
 * @param {string[]} props.selectedArr
 * @param {Set<string>} props.selectedSet
 * @param {Map<string, Object[]>} props.gridRelations
 * @param {(id: string) => void} props.handleShapeClick
 * @returns {*}
 */
function Grid({ orientation, selectedArr, selectedSet, gridRelations, handleShapeClick }) {
  

  let grid;
  grid = [];
  for (let i = 1; i < 13; i++) {
    let squareId = `s${i}`;
    let circleId = `c${i}`;
    let triangleId = `t${i}`;
    grid.push(
      <div
        key={i}
        className={`flex flex-${orientation == "vertical" ? "col" : "row"}}`}
      >
        <div
          className={`flex flex-${
            orientation == "vertical" ? "row" : "col"
          } justify-between`}
        >
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
        <div className="flex justify-center items-center">
          <Circle
            id={circleId}
            isSelected={selectedSet.has(circleId)}
            onClick={handleShapeClick}
            color="#3b82f6"
            relations={gridRelations.get(circleId)}
          />
        </div>
      </div>
    );
  }

  return (
      <div className="flex flex-col">
        <ArcherContainer>
          <div
            ref={parent}
            className={`flex flex-${orientation == "vertical" ? "col" : "row"}}`}
          >
            {grid}
          </div>
        </ArcherContainer>
      </div>
      
  );
}

export default Grid;
