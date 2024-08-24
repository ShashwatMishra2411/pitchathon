export default function ClubCards({ name, description, link }) {
  return (
    <div className="relative rounded-xl z-50">
      <div className="bg-black text-white lg:w-[25vw] p-5 h-96 shadow-md relative overflow-auto overflow-x-hidden no-scrollbar">
        {/* <button className="bg-green-200 text-green-700 rounded-xl px-3 py-1 absolute right-2 text-sm">
          4.5
        </button> */}
        <div className="py-1 px-1 flex justify-center items-center">
          <img src={link} alt="" className="h-52 w-52 bg-white rounded-full" />
        </div>
        <p className="text-lg font-bold font-sans">{name}</p>
        <div className="text-sm py-2 font-mono">{description}</div>
      </div>
    </div>
  );
}
