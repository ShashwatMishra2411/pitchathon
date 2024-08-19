// import Button24 from "../components/Button24";

export default function About() {
  return (
    <div
      id="about"
      className="des w-[90vw] flex flex-col justify-center items-center h-full rounded-xl px-9 py-10 "
    >
      <h1 className=" font-anton text-white text-6xl tracking-widest uppercase">
        About
      </h1>
      <div className="flex flex-wrap gap-10 text-white justify-center font-roboto-mono w-full">
        <div className="flex flex-col gap-4 justify-center items-center w-full basis-1/3">
          <h1 className="uppercase text-xl xl:text-4xl font-bold">Pre-Event</h1>
          <div className="h-full w-full bg-about rounded-2xl p-4">
            Getting into a loop of ideas, but finding out where to showcase
            them? It&apos;s time to think big and act fast!💡 Start building
            projects and join us at DUHacks 3.0! 🛠️ DUHacks 3.0 is a 36-hour
            national-level hackathon organized by the Google Developer Student
            Club, DDU🌍 This event provides a platform for passionate
            developers, designers, and enthusiasts to come together and
            transform their ideas into reality. It&apos;s not just an
            opportunity to showcase technical skills; it&apos;s a chance to
            network, learn, and have a memorable time with like-minded
            individuals.🤝 Your keyboard is your sword, your idea is your
            challenge, code is your vision, and DUHacks 3.0 is your stage! 🚨
            See you all in the hackathon!🔍💻
          </div>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Pre Event
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full basis-1/3">
          <h1 className="uppercase text-xl xl:text-4xl text-nowrap font-bold">
            24Hr Challenge
          </h1>
          <div className="h-full w-full bg-about rounded-2xl p-4">
            A 24 hour hackathon conducted as part of the Pitch-a-thon event, for
            brilliant minds to pitch and demonstrate their exciting ideas in a
            reputed platform, and win exciting cash prizes and further
            recognition! The Hackathon will involve teams of 4-6 conceptualising
            and materialising an innovating business idea - draft up a business
            plan, develop a website/app and possibly a prototype, after which
            they must produce an attracting advertisement and exhibit their
            project at an expo.
          </div>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            <a
              href="https://temp.guruprasaathm.com"
              target="_blank"
              className="w-full p-3 block h-full"
            >
              24 Hr Challenge
            </a>
          </button>
        </div>
        {/* <div className="flex flex-col gap-2 justify-center items-center w-full ">
          <h1 className="uppercase text-xl xl:text-4xl text-center text-nowrap font-bold">
            Panel Discussion
          </h1>
          <div className="h-full w-full bg-about rounded-2xl p-4">
            Getting into a loop of ideas, but finding out where to showcase
            them? It&apos;s time to think big and act fast!💡 Start building
            projects and join us at DUHacks 3.0! 🛠️ DUHacks 3.0 is a 36-hour
            national-level hackathon organized by the Google Developer Student
            Club, DDU🌍 This event provides a platform for passionate
            developers, designers, and enthusiasts to come together and
            transform their ideas into reality. It&apos;s not just an
            opportunity to showcase technical skills; it&apos;s a chance to
            network, learn, and have a memorable time with like-minded
            individuals.🤝 Your keyboard is your sword, your idea is your
            challenge, code is your vision, and DUHacks 3.0 is your stage! 🚨
            See you all in the hackathon!🔍💻
          </div>
          <Button24 text={"Pre-Event"} />
        </div> */}
      </div>
    </div>
  );
}
