import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { boxes } from "../../constants";
import cn from "classnames";
import TimeCard from "./TimeCard";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const timelineRef = useRef(null);
  const boxRefs = useRef([]);
  const boxRefs1 = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          x: index % 2 === 0 ? "100%" : "-100%", // Alternates the direction
          opacity: 0,
        },
        {
          x: index % 2 === 0 ? "0%" : "0%", // Alternates the direction
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "top 60%", // Adjust the trigger point as needed
            end: "bottom 60%",
            toggleActions: "play none play reverse", // This makes the animation replay on each scroll in and out
            markers: false, // Set to true to visualize the trigger points
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    boxRefs1.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          [index % 2 !== 0 ? "borderRight" : "borderLeft"]: "0px solid violet",
          borderBottom: "0px solid violet",
          boxShadow: "0px 0px 0px 0px gray",
        },
        {
          [index % 2 !== 0 ? "borderRight" : "borderLeft"]: "5px solid violet",
          borderBottom: "5px solid violet",
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 60%", // Adjust the trigger point as needed
            end: "bottom 60%",
            toggleActions: "play none play reverse",
            markers: false, // Set to true to visualize the trigger points
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="timeline"
      className="h-full w-full flex flex-col justify-center items-center text-white"
    >
      <h1 className="font-anton text-6xl uppercase font-bold">Timeline</h1>
      <div
        className="flex flex-col justify-center items-center relative"
        ref={timelineRef}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            id={`box-${index}`}
            ref={(el) => (boxRefs1.current[index] = el)}
            className={cn(
              "box w-full h-full bg-black text-white relative py-8 px-6 rounded-none rounded-t-none"
            )}
          >
            <div
              className="w-full h-full"
              ref={(el) => (boxRefs.current[index] = el)}
            >
              <TimeCard
                box={box}
                padding={index % 2 == 0 ? "pl-52" : "pr-52"}
              />
            </div>
            <div
              className={cn(
                "bg-rose-300 h-5 w-5 absolute rounded-full top-1/2",
                index % 2 == 0 ? "-left-3" : "-right-3"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
