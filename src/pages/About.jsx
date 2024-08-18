import Button24 from "../components/Button24";

export default function About() {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center px-20 h-full">
      <h1 className=" font-anton text-white text-6xl tracking-widest uppercase">
        About
      </h1>
      <div className="flex gap-10 text-white justify-between font-roboto-mono w-full">
        <div className="flex flex-col gap-2 justify-center items-center w-full ">
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
          <Button24 text={"Pre-Event"} />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full ">
          <h1 className="uppercase text-xl xl:text-4xl text-nowrap font-bold">
            24Hr Challenge
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
          <Button24 text={"24Hr Challenge"} />
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
