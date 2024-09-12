import { faculties, students } from "../../constants";
import Card from "../components/Card";

export default function Coordinators() {
  return (
    <div
      id="team"
      className="text-white h-full rounded-xl des p-10 w-[90vw] flex flex-col justify-center items-center gap-24"
    >
      <h1 className=" text-3xl lg:text-6xl uppercase font-anton tracking-widest text-center">
        Organising Committee
      </h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl lg:text-4xl uppercase font-anton tracking-widest  text-center">
          Faculty Coordinators
        </h1>
        <div
          // Tailwind's responsive grid classes
          className="h-full w-full overflow-hidden grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center"
        >
          {faculties.map((faculty, index) => {
            return <Card faculty={faculty} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl lg:text-4xl uppercase font-anton tracking-widest  text-center">
          Student Coordinators
        </h1>
        <div
          // Tailwind's responsive grid classes
          className="h-full w-full overflow-hidden grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center"
        >
          {students.map((faculty, index) => {
            return <Card faculty={faculty} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
