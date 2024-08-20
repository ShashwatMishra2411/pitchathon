export default function Accomodation() {
  return (
    <div>
      <div
        className="bg-contain bg-no-repeat h-screen"
        style={{ background: `url("/hostel.png")` }}
      >
        <img
          src="/bottom-left.png"
          className="absolute left-0 bottom-0"
          alt=""
        />
        <div className="register flex flex-col p-10 absolute gap-40 bottom-20 left-0">
          <h1 className="text-[#cded09] text-6xl font-bold tracking-widest uppercase font-anton">
            Accomodation
          </h1>
          <button className="bg-[#cded09] px-2 py-4 text-4xl mx-20">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
