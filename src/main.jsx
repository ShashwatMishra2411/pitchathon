import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accomodation from "./pages/Accomodation";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/accomodations"
          element={<Accomodation></Accomodation>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
