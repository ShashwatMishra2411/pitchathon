export default function ShButton({ text }) {
    return (
      <div className="h-full">
        <button className="">
          <span className="text-lg">{text}</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </div>
    );
  }