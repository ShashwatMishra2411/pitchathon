export default function Card() {
  return (
    <div>
      <div className="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
          <div className="flex gap-1">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
              fill="none"
              viewBox="0 0 24 24"
              className="fill-gray-300 rotate-[24deg]"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        <div className="para uppercase text-center leading-none z-40">
          <p className="text-black font-semibold text-xs font-serif">Best</p>
          <p className="font-bold text-xl tracking-wider text-gray-500">
            Fashion
          </p>
        </div>
        <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
          <img
            src="https://images.unsplash.com/photo-1612833939111-6c9d3c8b4a5d"
            alt="product"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
          <div className="flex flex-col items-start gap-1">
            <div className="inline-flex gap-3 items-center justify-center">
              <div className="p-1 bg-white flex items-center justify-center rounded-full">
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-gray-800 h-3 w-3 stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 12 21a19.79 19.79 0 0 1-7.82 1.92A2 2 0 0 1 2 20.92v-3a2 2 0 0 1 .76-1.54c.59-.49 1.29-1.04 2-1.66a20.21 20.21 0 0 0 16.48 0c.71.62 1.41 1.17 2 1.66A2 2 0 0 1 22 16.92z"></path>
                  <path d="M12 15a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z"></path>
                  <path d="M12 3a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
