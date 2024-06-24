import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./Game.jsx";
import WelcomePage from "./WelcomePage.jsx";
import "./index.css";

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </MemoryRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
