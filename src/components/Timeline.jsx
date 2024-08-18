import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { boxes } from "../../constants";
import cn from "classnames";

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
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 60%", // Adjust the trigger point as needed
            end: "bottom 60%",
            scrub: true,
            markers: true, // Set to true to visualize the trigger points
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
          [index % 2 !== 0 ? "borderRight" : "borderLeft"]: "0px solid purple",
          borderBottom: "0px solid purple",
          boxShadow: "0px 0px 0px 0px purple",
        },
        {
          [index % 2 !== 0 ? "borderRight" : "borderLeft"]: "20px solid purple",
          borderBottom: "20px solid purple",
          duration: 2,
          //   boxShadow: "0px 0px 10px 10px violet",
          scrollTrigger: {
            trigger: box,
            start: "top 60%", // Adjust the trigger point as needed
            end: "bottom 60%",
            scrub: true,
            markers: true, // Set to true to visualize the trigger points
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-full bg-black text-white">
      <div
        id="timeline"
        className="flex flex-col justify-center items-center relative"
        ref={timelineRef}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            id={`box-${index}`}
            ref={(el) => (boxRefs1.current[index] = el)}
            className={cn(
              "box w-96 h-96 bg-black text-white relative rounded-full rounded-t-none"
            )}
          >
            <div
              className="absolute h-full w-full flex flex-col text-3xl bg-gray-400 rounded-full bg-opacity-15 justify-center items-center"
              ref={(el) => (boxRefs.current[index] = el)}
            >
              <div className="date">{box.date}</div>
              <div className="event">{box.event}</div>
              <div className="description">{box.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
