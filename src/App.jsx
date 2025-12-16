import React from "react";
import { Routes, Route } from "react-router-dom";
import ChoicePage from "./pages/ChoicePage";
import StyledPage from "./pages/StyledPage";
import EmotionPage from "./pages/EmotionPage";
import LinariaPage from "./pages/LinariaPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ChoicePage />} />
      <Route path="/styled" element={<StyledPage />} />
      <Route path="/emotion" element={<EmotionPage />} />
      <Route path="/linaria" element={<LinariaPage />} />
    </Routes>
  );
}
