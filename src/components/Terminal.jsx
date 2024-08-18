export default function Terminal() {
  return (
    <div className="w-[90vw] h-full">
      <aside className="bg-black text-white p-6 rounded-lg w-full font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm font-anton tracking-widest font-bold">bash</p>
        </div>
        <div className="mt-4  font-source-code-pro">
          <p className="text-green-400 flex">
            vitc@pitchathon:<span className="text-blue-500">~</span>3
            <span className="text-white">$</span>
            <form action="" className="pl-2 text-white">
              <input
                type="text"
                className="bg-black border-none outline-none focus:outline-none"
              />
            </form>
          </p>
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </div>
  );
}
