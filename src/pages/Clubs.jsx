// import React from "react";
import { clubs } from "../../constants";
import ClubCards from "../components/ClubCards";
export default function Clubs() {
  return (
    <div className="text-white h-full w-full flex flex-col justify-center items-center gap-24">
      <h1 className="text-6xl font-anton tracking-widest uppercase ">
        Organising Clubs
      </h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="h-full w-full flex gap-4 flex-wrap justify-center items-center">
          {clubs.map((club, index) => {
            return (
              <ClubCards
                key={index}
                name={club.name}
                description={club.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
