export default function PreeventCard({ poster }) {
  return (
    <div className="w-60 h-96 hover:scale-105 duration-200 shadow-2xl relative">
      <img src={poster.src} alt="poster" className="w-full h-full" />
    </div>
  );
}
