// import React from "react";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Sponsors from "./pages/Sponsors";
import Timeline from "./components/Timeline";
import Coordinators from "./pages/Coordinators";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";
import Qna from "./pages/Qna";
import Navbar from "./components/Navbar";
// import Merch from "./pages/Merch";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
export default function HomePage() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 144,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#eb98a4",
        },
        links: {
          color: "#fff3b0",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "centre",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="w-full overflow-hidden flex gap-10 flex-col justify-center items-center">
      <Navbar />

      <Home />
      <About />
      <Timeline />
      {/* <Merch /> */}
      <Clubs />
      {/* <Sponsors /> */}
      <Coordinators />
      <Qna />
      <Contact />
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-[100vh] absolute -z-10"
      />
    </div>
  );
}
