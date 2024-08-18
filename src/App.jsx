// import React from 'react'

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Sponsors from "./pages/Sponsors";
import Timeline from "./components/Timeline";
import Coordinators from "./pages/Coordinators";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";
import Qna from "./pages/Qna";

export default function App() {
  return (
    <div className="w-full overflow-hidden flex gap-10 flex-col justify-center items-center">
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Clubs />
      {/* <Sponsors /> */}
      <Coordinators />
      <Qna />
      <Contact />
    </div>
  );
}
