
import codes from "./codes.json";
import "./App.css";
import Level from "./components/Level";
import { useState } from "react";


export default function Game() {
  let [levelno, setLevelNo] = useState(0);
  
  return (
    <Level codes={codes} levelno={levelno} setLevelNo={setLevelNo} />
  )
}
