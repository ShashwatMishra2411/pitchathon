import { useEffect, useRef } from "react";
import { routes } from "../../constants";
import logo from "../../public/pl.png";
import pitch from "/pitcwhite.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const logoRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        x: "-100%",
        transformOrigin: "left",
      },
      {
        x: "0",
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
      }
    );
  }, []);
  return (
    <div className="bg-black bg-opacity-50 flex justify-between pl-0 px-4 py-2 items-center w-full z-[100] top-0 fixed font-anton tracking-widest uppercase">
      <div className="flex">
        <img
          className="w-20 h-16 relative z-10 bg-black"
          src={logo}
          alt="Genius"
        />
        <img
          className="w-40 h-16 relative z-0"
          ref={logoRef}
          src={pitch}
          alt=""
        />
      </div>
      <nav className="flex">
        {routes.map((route) => {
          return (
            <div key={route.label}>
              <a
                className="text-white px-1 sm:px-4 py-2 flex flex-col relative after:bg-opacity-30 text-xs md:text-xl font-bold after:w-full after:h-full after:scale-x-0 after:hover:scale-x-100 after:bg-white after:absolute after:bottom-0 after:left-0 after:transform after:hover:origin-left after:origin-right after:transition-transform after:duration-200 after:ease-in-out "
                href={route.href}
              >
                {route.label}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
