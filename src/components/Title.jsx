import { useRef, useEffect } from "react";
import gsap from "gsap";
import P from "/p.svg";
import I from "/i.svg";
import C from "/c.svg";
import T from "/t.svg";
import H from "/h.svg";
import A from "/a.svg";
import O from "/o.svg";
import N from "/n.svg";
import wind from "/wind.svg";
import Buttonpre from "./Buttonpre";

export default function Title() {
  const circleRef = useRef(null);
  const titleRef = useRef(null);
  const hammerRef = useRef(null);
  const hammerRef1 = useRef(null);
  const iRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      {
        x: "-120%",
        rotate: 0,
      },
      {
        x: "0%",
        rotate: 360,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        scaleX: 0,
        rotate: 0,
      },
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      hammerRef.current,
      {
        rotate: 0,
      },
      {
        rotate: 60,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      hammerRef1.current,
      {
        rotate: 0,
      },
      {
        rotate: 60,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      iRef.current,
      {
        rotateX: 0, // Rotate in the Z direction
      },
      {
        rotateX: 360,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="h-[100vh] gap-10 flex flex-col justify-center items-center px-20 py-60 w-full overflow-hidden z-40">
      <div
        className="grid grid-cols-10 grid-rows-1 w-full h-full"
        style={{ perspective: "1200px" }}
        ref={titleRef}
      >
        <img src={P} alt="" className="w-full h-full object-contain" />
        <img
          ref={iRef}
          src={I}
          alt=""
          className="w-full h-full object-contain"
        />
        <img
          // ref={hammerRef}
          src={T}
          alt=""
          className="w-full h-full object-contain"
        />
        <img src={C} alt="" className="w-full h-full object-contain" />
        <img src={H} alt="" className="w-full h-full object-contain" />
        <img src={A} alt="" className="w-full h-full object-contain" />

        <img
          ref={hammerRef1}
          src={T}
          alt=""
          className="w-full h-full object-contain"
        />
        <div className="aspect-w-1 aspect-h-1">
          <img src={H} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="aspect-w-1 aspect-h-1" id="circle" ref={circleRef}>
          <img src={O} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={N} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <h1 className="text-center text-gray-100 text-6xl uppercase tracking-widest font-anton font-bold">
        1-2 October, 2024
      </h1>
      {/* <div className="text-black flex uppercase text-4xl font-bold bg-white items-center rounded-3xl p-2 pl-0 justify-between bg-no-repeat">
        <img className="object-contain h-16 w-16" src={wind} alt="" />
        <div className="font-comic-neue font-bold">
          <div>Breath life into ideas</div>
        </div>
      </div> */}
      {/* <div className="flex relative w-full justify-center items-center z-50 gap-10">
        <Buttonpre text={"Pre-EventS"} />
        <Buttonpre text={"24Hr Challenge"} />
      </div> */}
    </div>
  );
}
