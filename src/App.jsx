import Grid from "./components/Grid";
import Code from "./components/Code";
import { useState, useEffect } from "react";
import codes from "./codes.json";
import colors from "./utlis/colors";
import compare_n_color from "./utlis/compare_n_color";
import "./App.css";

export default function App() {
  var [selectedArr, setSelectedArr] = useState([]);
  var [gridRelations, setGridRelations] = useState(new Map());
  let [selectedSet, setSelectedSet] = useState(new Set([]));
  let [textColorArr, setTextColorArr] = useState([]);
  let [colorGrid, setColorGrid] = useState(new Map());
  let [orientation, setOrientation] = useState("horizontal");
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
    } else {
      if (selectedArr[selectedArr.length - 1] === id) {
        selectedSet.delete(id);
        // const newSelectedArr = selectedArr.slice(0, selectedArr.length);
        newSelectedArr.pop();
        gridRelations.delete(id);

        setSelectedArr(newSelectedArr);
      }
    }

    compare_n_color(codes.code1, newSelectedArr, setTextColorArr, setColorGrid);
  };

  const reset = () => {
    setSelectedSet(new Set());
    setGridRelations(new Map());
    setSelectedArr([]);
    setTextColorArr([]);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1386) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    };
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="">
      <div className="absolute top-1/4 left-3 ">
        <Code codeArr={codes["code1"]} colorArr={textColorArr} />
        <button onClick={reset}> reset  </button>
      </div>
      <div className="flex flex-col">
        <Grid
          orientation={orientation}
          selectedSet={selectedSet}
          gridRelations={gridRelations}
          handleShapeClick={handleShapeClick}
          colorGrid={colorGrid}
        />
      </div>
    </div>
  );
}
