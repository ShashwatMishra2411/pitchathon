import React, { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const commandsEndRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.commandInput;
    const command = input.value;
    if (command === "help") {
      setCommands([
        ...commands,
        <div className="text-green-400 flex" key={commands.length}>
          vitc@pitchathon:<span className="text-blue-500">~</span>
          <span className="text-white">$</span>
          <span className="pl-2 text-white">help</span>
        </div>,
        <div className="text-white pl-4" key={commands.length + 1}>
          <p>Available Commands:</p>
          <p>help - List all available commands</p>
          <p>about - About the event</p>
          <p>contact - Contact details</p>
          <p>schedule - Event schedule</p>
        </div>,
      ]);
      input.value = "";
      return;
    }
    setCommands([
      ...commands,
      <div className="text-green-400 flex" key={commands.length}>
        vitc@pitchathon:<span className="text-blue-500">~</span>
        <span className="text-white">$</span>
        <span className="pl-2 text-white">{command}</span>
      </div>,
    ]);
    input.value = "";
  }

  useEffect(() => {
    commandsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  return (
    <div className="w-[90vw] h-full">
      <aside className="bg-black text-white p-6 rounded-lg w-full font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm font-anton self-center tracking-widest font-bold">
            bash
          </p>
        </div>
        <div className="mt-4 text-xl font-source-code-pro">
          {commands}
          <div className="text-green-400 flex">
            vitc@pitchathon:<span className="text-blue-500">~</span>
            <span className="text-white">$</span>
            <form
              action=""
              className="pl-2 w-full text-white"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="commandInput"
                className="bg-black border-none outline-none w-full focus:outline-none"
                autoComplete="off"
              />
            </form>
          </div>
          {/* <div ref={commandsEndRef} /> */}
        </div>
      </aside>
    </div>
  );
}
