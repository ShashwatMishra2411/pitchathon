export default function Buttonpre({ text }) {
  return (
    <div className="h-full w-72">
      <button className="cursor-pointer transistion-all duration-500 hover:shadow-[0_15px_50px_-15px_#13b6da] p-[12px] rounded-[24px] flex gap-4 bg-gradient-to-r from-gray-400 to-gray-200">
        {/* <svg
          className="h-12 w-12 bg-[#0a0a0a] shadow-xl rounded-full p-3"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
            fill="#F0F0F0"
          ></path>
        </svg> */}
        <span className="text-[1.9rem] font-anton tracking-widest text-nowrap font-bold text-black uppercase pr-3">
          {text}
        </span>
      </button>
    </div>
  );
}
