// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Accomodation from "./pages/Accomodation";
// import Navbar from "./components/Navbar.jsx";
import HomePage from "./HomePage.jsx";
import Preevent from "./pages/Preevent.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/accomodations"
          element={<Accomodation></Accomodation>}
        ></Route>
        <Route path="/preevent" element={<Preevent></Preevent>}></Route>
      </Routes>
    </div>
  );
}
