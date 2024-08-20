// import React from "react";
import { faculties } from "../../constants";
import Card from "../components/Card";

export default function Coordinators() {
  return (
    <div
      id="team"
      className="text-white h-full des py-10 w-[90vw] flex flex-col justify-center items-center gap-24"
    >
      <h1 className="text-4xl uppercase">Organising Committee</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl uppercase">Faculty Coordinators</h1>
        <div
          // Tailwind's responsive grid classes
          className="h-full w-full overflow-hidden grid gap-10 justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
        >
          {faculties.map((faculty, index) => {
            return <Card faculty={faculty} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
