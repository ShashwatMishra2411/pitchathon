// import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import PreeventCard from "../components/PreeventCard";
import { posters } from "../../constants";

export default function Preevent() {
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
    <div className="h-full flex justify-center items-center relative">
      <div className="flex justify-center flex-col items-center p-10 flex-wrap gap-10 relative z-[100]">
        <h1 className="text-5xl lg:text-8xl font-anton uppercase h-full tracking-widest text-white font-extrabold">
          Pre Events
        </h1>
        {/* <h1 className="font-source-code-pro text-lg text-nowrap text-white">
          Registrations start soon.......
        </h1> */}
        <div className="grid justify-content-center grid-cols-3 lg:grid-cols-5 lg:grid-rows-3 des p-2 lg:p-10 z-[200] relative rounded-xl gap-2 lg:gap-10">
          {posters.map((item, index) => {
            return <PreeventCard key={index} poster={item} />;
          })}
        </div>
      </div>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-[100vh]"
      />
    </div>
  );
}
