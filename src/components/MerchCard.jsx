import PropTypes from "prop-types";
MerchCard.propTypes = {
  src: PropTypes.object.isRequired,
};

export default function MerchCard({ src }) {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "rotateY(180deg)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
      className="lg:w-96 lg:h-96 w-52 h-52 relative flex justify-center items-center"
    >
      <img
        style={{
          transform: "rotateY(-180deg) translateZ(1em)",
          backfaceVisibility: "hidden",
        }}
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={`${src.src}_back.png`}
        alt="black tshirt"
      />
      <img
        style={{
          transform: "translateZ(1em)",
          backfaceVisibility: "hidden",
        }}
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={`${src.src}_front.png`}
        alt="black tshirt"
      />
    </div>
  );
}
