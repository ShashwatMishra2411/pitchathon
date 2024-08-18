// import React from "react";
import { clubs, partners } from "../../constants";
import ClubCards from "../components/ClubCards";
export default function Clubs() {
  return (
    <div className="text-white h-full w-full flex flex-col justify-center items-center gap-24">
      <h1 className="text-6xl font-anton tracking-widest uppercase ">
        Organising Partners
      </h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <h1 className="text-4xl font-anton text-center tracking-widest uppercase">
            Partners
          </h1>
          <div className="h-full w-full flex gap-4 flex-wrap justify-center items-center">
            {partners.map((club, index) => {
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
        <div>
          <h1 className="text-4xl font-anton text-center tracking-widest uppercase">
            Clubs
          </h1>
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
    </div>
  );
}
