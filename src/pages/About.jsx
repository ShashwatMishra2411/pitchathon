export default function About() {
  return (
    <div
      id="about"
      className="des w-[90vw] flex flex-col justify-center items-center h-full rounded-xl px-9 py-10 "
    >
      <h1 className="font-anton text-white text-6xl tracking-widest uppercase">
        About
      </h1>
      <div className="flex flex-wrap gap-10 text-white justify-center font-roboto-mono w-full">
        <div className="flex flex-col gap-4 justify-center items-center w-full basis-1/3">
          <h1 className="uppercase text-xl xl:text-4xl font-bold">Pre-Event</h1>
          <div className="h-full w-full text-center bg-about rounded-2xl p-4">
            Leading up to our main event, we’ve curated an exciting series of
            pre-events organized by our collaborating clubs. These activities
            are designed to engage participants and spark creativity across
            various domains. Whether you're passionate about arts, eager to
            tackle a hackathon, or ready to dive into some competitive gaming,
            there's something for everyone. These pre-events set the stage for
            the main challenge, offering a chance to connect, collaborate, and
            warm up your innovative spirit. Get involved and be part of the
            journey leading to the grand finale!
          </div>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Coming Soon!!
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full basis-1/3">
          <h1 className="uppercase text-xl xl:text-4xl text-nowrap font-bold">
            24Hr Challenge
          </h1>
          <div className="h-full w-full text-center bg-about rounded-2xl p-4">
            Our event is a 24-hour innovation challenge designed to spark
            creativity and entrepreneurship among students. Teams of 4-6 will
            develop a unique business or product concept, crafting everything
            from a compelling brand identity to a creative advertisement,
            website or app, and, if applicable, a working prototype.
            Participants will also create a detailed business plan, covering
            market fit, target audience, value proposition, revenue model, and
            marketing strategy. The top 10 teams will present their ideas to a
            panel of judges, who will evaluate their innovation, creativity,
            brand appeal, digital presence, and pitch delivery. Join us in this
            exciting journey where ideas turn into reality and the future of
            entrepreneurship is forged.
          </div>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            <a
              href="https://pitchathon.co.in/challenge/"
              target="_blank"
              className="w-full p-3 block h-full"
            >
              24 Hr Challenge
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
