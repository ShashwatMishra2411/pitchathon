// import React from "react";
import { clubs, partners } from "../../constants";
import ClubCards from "../components/ClubCards";
export default function Clubs() {
  return (
    <div className="text-white des w-[90vw] h-full rounded-3xl py-10 px-6 flex flex-col justify-center items-center gap-24">
      <h1 className="text-6xl font-anton tracking-widest uppercase ">
        Organisers
      </h1>
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-anton text-center tracking-widest uppercase">
            Organising Partners
          </h1>
          <div className="h-full w-full flex-wrap flex gap-4 justify-center items-center">
            {partners.map((club, index) => {
              return (
                <ClubCards
                  key={index}
                  link={club.link}
                  name={club.name}
                  description={club.description}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-anton text-center tracking-widest uppercase">
            Organising Clubs
          </h1>
          <div className="h-full w-full flex gap-4 flex-wrap justify-center items-center">
            {clubs.map((club, index) => {
              return (
                <ClubCards
                  key={index}
                  link={club.link}
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
