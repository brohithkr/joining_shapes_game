import { useState, useEffect, useReducer } from "react";
import { Square, Circle, Triangle, Hexagon } from "./shapes";
import { ArcherContainer } from "react-archer";

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
 * @param {Map<string, string>} props.colorGrid
 * @param {int} props.codeLen
 * @param {int} props.nOfGridShapes
 * @returns {*}
 */
function Grid({
  orientation,
  selectedArr,
  selectedSet,
  gridRelations,
  handleShapeClick,
  colorGrid,
  codeLen,
  nOfGridShapes = 2,
}) {
  const [svgOrientation, setSvgOrientation] = useState("vertical");

  const initialState = { name: "vertical" };
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...prevState, name: action.payload };
      default:
        throw new Error();
    }
  }, initialState);
  let grid;
  grid = [];
  for (let i = 1; i <= codeLen + 1; i++) {
    let squareId = `s-${i}`;
    let circle1Id = `c1-${i}`;
    let circle2Id = `c2-${i}`;
    let triangleId = `t-${i}`;
    let hexagonId = `h-${i}`;
    grid.push(
      <div
        key={i}
        className={`flex flex-${orientation == "vertical" ? "col" : "row"}`}
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
            color={
              colorGrid.get(squareId) ? colorGrid.get(squareId) : "#3b82f6"
            }
            relations={gridRelations.get(squareId)}
          />
          <div className="size-10"></div>
          <Triangle
            id={triangleId}
            isSelected={selectedSet.has(triangleId)}
            onClick={handleShapeClick}
            color={
              colorGrid.get(triangleId) ? colorGrid.get(triangleId) : "#3b82f6"
            }
            relations={gridRelations.get(triangleId)}
          />
          {nOfGridShapes >= 3 && (
            <>
              <div className="size-10"></div>
              <Hexagon
                id={hexagonId}
                isSelected={selectedSet.has(hexagonId)}
                onClick={handleShapeClick}
                color={
                  colorGrid.get(hexagonId)
                    ? colorGrid.get(hexagonId)
                    : "#3b82f6"
                }
                relations={gridRelations.get(hexagonId)}
              />
            </>
          )}
        </div>

        {i != codeLen + 1 && (
          <div
            className={`flex flex-1 ${
              nOfGridShapes == 2 ? "justify-center" : ""
            } items-center flex-${orientation == "vertical" ? "row" : "col"} `}
          >
            {nOfGridShapes >= 3 && <div className="size-[56px]"></div>}
            <Circle
              id={circle1Id}
              isSelected={selectedSet.has(circle1Id)}
              onClick={handleShapeClick}
              color={
                colorGrid.get(circle1Id) ? colorGrid.get(circle1Id) : "#3b82f6"
              }
              relations={gridRelations.get(circle1Id)}
            />

            {nOfGridShapes >= 3 && (
              <>
                <div className="size-[56px]"></div>
                <Circle
                  id={circle2Id}
                  isSelected={selectedSet.has(circle2Id)}
                  onClick={handleShapeClick}
                  color={
                    colorGrid.get(circle2Id)
                      ? colorGrid.get(circle2Id)
                      : "#3b82f6"
                  }
                  relations={gridRelations.get(circle2Id)}
                />
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  useEffect(() => {
    function handleWindowResize() {
      setSvgOrientation(window.innerWidth <= 1386 ? "vertical" : "horizontal");
      dispatch({
        type: "UPDATE_NAME",
        payload: window.innerWidth <= 1386 ? "vertical" : "horizontal",
      });
      if(selectedArr .length > 1) {
        // handleShapeClick(selectedArr[selectedArr.length - 1]);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`flex flex-${orientation == "vertical" ? "col" : "row"}`}>
      <ArcherContainer className={svgOrientation}>
        <div
          ref={parent}
          className={`flex flex-${orientation == "vertical" ? "col" : "row"}`}
        >
          {grid}
        </div>
      </ArcherContainer>
    </div>
  );
}

export default Grid;
