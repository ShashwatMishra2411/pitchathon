export default function PreeventCard({ poster }) {
  return (
    <div className="w-full h-full hover:scale-105 duration-200 shadow-2xl relative group">
      <a
        target="_blank"
        className="w-full h-full flex justify-center items-center"
        href={poster.link}
      >
        <img src={poster.src} alt="poster" className="w-full h-full" />
      </a>
      {/* <div className="h-0 group-hover:h-2/3 flex flex-col justify-center items-center bg-black/70 absolute w-full gap-10 overflow-hidden bottom-0 left-0 z-10 duration-300">
        <h1 className="text-white uppercase text-2xl font-extrabold text-center">
          {poster.title}
        </h1>
        <button className="bg-black p-3 rounded-xl font-bold text-white">
          <a target="_blank" href={poster.link}>
            Register Now
          </a>
        </button>
      </div> */}
    </div>
  );
}
