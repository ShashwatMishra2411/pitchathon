import { merch } from "../../constants";
import MerchCard from "../components/MerchCard";

export default function Merch() {
  return (
    <div
      id="merch"
      className="text-white h-full des py-10 w-[90vw] px-4 flex flex-col justify-center items-center gap-24"
    >
      <h1 className="lg:text-6xl text-4xl font-anton tracking-widest uppercase text-center">
        Merchandise
      </h1>

      <div
        style={{
          perspective: "1000px",
        }}
        className="flex md:flex-row flex-col justify-center items-center gap-4"
      >
        {merch.map((item, index) => (
          <div key={index}>
            <MerchCard src={item} />
          </div>
        ))}
      </div>
      <h1 className="font-source-code-pro text-lg lg:text-3xl text-white">
        Merch sale starting soon...
      </h1>
    </div>
  );
}
