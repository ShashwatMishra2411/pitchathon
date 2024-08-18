// import React from "react";
import { faculties } from "../../constants";
import Card from "../components/Card";
export default function Coordinators() {
  return (
    <div
      id="team"
      className="text-white h-full des py-10 w-[90vw] flex flex-col justify-center items-center gap-24"
    >
      <h1 className="text-4xl uppercase ">Organising Committee</h1>
      {/* <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl uppercase ">Organisers</h1>
        <div className="h-full w-full flex gap-4 justify-center items-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl uppercase ">Faculty Coordinators</h1>
        <div className="h-full w-full overflow-hidden flex-wrap flex gap-4 justify-center items-center">
          {faculties.map((faculty, index) => {
            return <Card faculty={faculty} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
