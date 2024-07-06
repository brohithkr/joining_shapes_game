import Grid from "./Grid";
import Code from "./Code";
import { useState, useEffect, useRef } from "react";
import colors from "../utlis/colors";
import compare_n_color from "../utlis/compare_n_color";
import sounds from "../utlis/sounds";

export default function Level({ codes, levelno, setLevelNo }) {
  var [selectedArr, setSelectedArr] = useState([]);
  var [gridRelations, setGridRelations] = useState(new Map());
  let [selectedSet, setSelectedSet] = useState(new Set([]));
  let [textColorArr, setTextColorArr] = useState([]);
  let [colorGrid, setColorGrid] = useState(new Map());
  let [orientation, setOrientation] = useState("horizontal");
  let [showNextButton, setShowNextButton] = useState(false);

  function maxLenReached() {
    return (selectedArr.length - (selectedArr.length % 3)) / 3
  }
  let code = codes[levelno];

  let handleShapeClick = (id) => {
    var currentRelation = gridRelations.get(id);
    var newSelectedArr = selectedArr.slice();

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
      // const newSelectedArr = [...selectedArr, id];
      newSelectedArr.push(id);
      setSelectedArr(newSelectedArr);
      // maxLenReached.current += 1;
    } else {
      if (selectedArr[selectedArr.length - 1] === id) {
        selectedSet.delete(id);
        newSelectedArr.pop();
        gridRelations.delete(id);

        setSelectedArr(newSelectedArr);
        // maxLenReached.current += 1;
      }
    }
    let inputCode = compare_n_color(
      code.code,
      newSelectedArr,
      setTextColorArr,
      setColorGrid,
      setShowNextButton
    );
    console.log(textColorArr, colors.green);
    console.log(maxLenReached(), colors.green);
    if (maxLenReached() < inputCode.length && selectedArr.length % 3 === 0) {
      if (textColorArr[maxLenReached()] == colors.green) {
        sounds.correct.play();
      } else if (textColorArr[maxLenReached()] == colors.red) {
        sounds.wrong.play();
      }
    }
  };

  const reset = () => {
    setShowNextButton(false);
    setSelectedSet(new Set());
    setGridRelations(new Map());
    setSelectedArr([]);
    setTextColorArr([]);
  };
  useEffect(() => {
    const handleResize = () => {
      if (selectedArr.length > 1) {
        console.log("selectedArr");
      }
      if (window.innerWidth < 1342) {
        let newOrientation = "vertical";
        setOrientation(newOrientation);
      } else {
        let newOrientation = "horizontal";
        setOrientation(newOrientation);
      }
    };
    setGridRelations(new Map(gridRelations));

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex flex-row ml-32">
        <div className="absolute z-10 top-1/4 left-3 ">
          <Code codeArr={code["code"]} colorArr={textColorArr} />
          <button className="mt-4" onClick={reset}>
            <b>Reset</b>
          </button>
        </div>
        <div className={`flex items-center`}>
          <Grid
            orientation={orientation}
            selectedSet={selectedSet}
            gridRelations={gridRelations}
            handleShapeClick={handleShapeClick}
            colorGrid={colorGrid}
            codeLen={code.code.length}
            nOfGridShapes={code.nOfShapes}
            selectedArr={selectedArr}
          />
        </div>
        {showNextButton && (
          <button
            className="mt-4"
            onClick={() => {
              reset();
              setLevelNo(levelno + 1);
            }}
          >
            <b>Next</b>
          </button>
        )}
      </div>
    </>
  );
}
