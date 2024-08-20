import cn from "classnames";
export default function TimeCard({ padding, box }) {
  return (
    <div
      className={cn(
        "service-card w-full h-full shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 des flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-3xl"
      )}
    >
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#000000"
        fill="none"
        viewBox="0 0 24 24"
        className="text-5xl h-12 w-12 stroke-gray-400 group-hover:stroke-gray-800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
        <line y2="21" x2="16" y1="21" x1="8"></line>
        <line y2="21" x2="12" y1="17" x1="12"></line>
      </svg>
      <p className="font-bold text-2xl text-white group-hover:text-black/100">
        {box.date}
      </p>
      <p className="font-bold text-2xl text-white group-hover:text-black/100">
        {box.event}
      </p>
      <p className="text-gray-400 text-sm">{box.description}</p>
      {/* <p
        style={{
          WebkitTextStroke: "1px gray",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold self-end"
      >
        09
      </p> */}
    </div>
  );
}
