import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

import LabsArchive from "./pages/LabsArchive";
import Vault from "./pages/Vault";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />

          <Route path="/labs" element={<LabsArchive />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
