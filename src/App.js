import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Kayla from "./profiles/Kayla";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ini yang mendaftarkan URL localhost/kayla-indah-pasha */}
        <Route path="/kayla-indah-pasha" element={<Kayla />} />

        {}
        <Route path="/" element={<Navigate to="/kayla-indah-pasha" />} />
      </Routes>
    </Router>
  );
}

export default App;