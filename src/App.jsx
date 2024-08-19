// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Accomodation from "./pages/Accomodation";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./HomePage.jsx";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/accomodations"
          element={<Accomodation></Accomodation>}
        ></Route>
      </Routes>
    </div>
  );
}
