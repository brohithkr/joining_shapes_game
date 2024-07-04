import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./Game.jsx";
import WelcomePage from "./WelcomePage.jsx";
import "./index.css";

export function MainRoute() {
  return (
    <Routes >
      <Route path="game" element={<Game />} />
      <Route path="" element={<WelcomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="games/joiningshapes">
      <MainRoute />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
