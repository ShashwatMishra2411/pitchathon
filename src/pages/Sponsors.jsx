export default function Sponsors() {
  return (
    <div className="h-full flex des w-[90vw] rounded-xl justify-center items-center relative">
      <div className="flex justify-center flex-col items-center p-10 gap-10 relative z-[100]">
        <h1 className="text-5xl lg:text-8xl font-anton uppercase tracking-widest text-white font-extrabold">
          Sponsors
        </h1>

        {/* Platinum Sponsors */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#E5E4E2] mb-8">
            Platinum Sponsors
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                className="w-96 h-60 p-3 object-contain bg-white rounded-t-lg"
                src="SPONSORS/bobble.png"
                alt="Bobble Sponsor"
              />
            </div>
            <div className="bg-gray-800 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                className="w-96 h-60 object-cover rounded-t-lg"
                src="SPONSORS/glok.png"
                alt="Glok Sponsor"
              />
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="text-center mt-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#FFD700] mb-8">
            Gold Sponsors
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 p-3 object-contain rounded-t-lg"
                src="SPONSORS/devfolio.png"
                alt="Devfolio Sponsor"
              />
            </div>
            <div className="bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain rounded-t-lg"
                src="SPONSORS/eth.png"
                alt="ETH Sponsor"
              />
            </div>
            <div className="bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain rounded-t-lg"
                src="SPONSORS/polygon.png"
                alt="Polygon Sponsor"
              />
            </div>
            <div className="bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain rounded-t-lg"
                src="SPONSORS/pit.png"
                alt="Quick Pik Sponsor"
              />
            </div>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="text-center mt-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#C0C0C0] mb-8">
            Silver Sponsors
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white flex justify-center items-center rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain rounded-t-lg"
                src="SPONSORS/azure.svg"
                alt="Azure Sponsor"
              />
            </div>
            <div className="bg-white flex relative justify-center items-center rounded-lg transition-transform transform hover:scale-105 overflow-hidden hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain absolute left-0 top-5 rounded-t-lg"
                src="SPONSORS/zsecurity.png"
                alt="Zsecurity Sponsor"
              />
            </div>
            <div className="bg-white flex justify-center items-center rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-96 h-60 object-contain rounded-t-lg"
                src="SPONSORS/cake.png"
                alt="InterView Cake Sponsor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
