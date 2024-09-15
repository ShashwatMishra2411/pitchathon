import { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const commandsEndRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.commandInput;
    const command = input.value.trim().toLowerCase();
    let newCommands = [
      ...commands,
      <div className="text-green-400 flex" key={commands.length}>
        vitc@pitchathon:<span className="text-blue-500">~</span>
        <span className="text-white">$</span>
        <span className="pl-2 text-white">{command}</span>
      </div>,
    ];

    switch (command) {
      case "help":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>Available Commands:</p>
            <p>help - List all available commands</p>
            <p>
              0 - What is the main goal of the 24Hr Challenge Product
              Innovation?
            </p>
            <p>1 - When is the last day to register?</p>
            <p>2 - What is the registration fee?</p>
            <p>3 - Can all colleges from India participate?</p>
            <p>4 - What is the team size for the 24hr challenge?</p>
            <p>5 - When will the pre-events be revealed?</p>
          </div>,
        ];
        break;
      case "0":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>
                What is the main goal of the 24Hr Challenge Product Innovation?
              </strong>
            </p>
            <p>
              The main goal is to innovate and build new products within a
              24-hour timeframe, focusing on creativity and practical solutions.
            </p>
          </div>,
        ];
        break;
      case "1":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>When is the last day to register?</strong>
            </p>
            <p>21st September.</p>
          </div>,
        ];
        break;
      case "2":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>What is the registration fee?</strong>
            </p>
            <p>Zero</p>
          </div>,
        ];
        break;
      case "3":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>Can all colleges from India participate?</strong>
            </p>
            <p>Yes, all colleges from India are invited.</p>
          </div>,
        ];
        break;
      case "4":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>What is the team size for the 24hr challenge?</strong>
            </p>
            <p>Team Size: 4-6</p>
          </div>,
        ];
        break;
      case "5":
        newCommands = [
          ...newCommands,
          <div className="text-white pl-4" key={commands.length + 1}>
            <p>
              <strong>When will the pre-events be revealed?</strong>
            </p>
            <p>Soon.</p>
          </div>,
        ];
        break;
      default:
        newCommands = [
          ...newCommands,
          <div className="text-red-400 pl-4" key={commands.length + 1}>
            <p>
              Command not found. Type "help" for a list of available commands.
            </p>
          </div>,
        ];
        break;
    }

    setCommands(newCommands);
    input.value = "";
  }

  useEffect(() => {
    commandsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  return (
    <div className="w-[90vw] min-h-96 h-full">
      <aside className="bg-black min-h-96 text-white p-6 rounded-lg w-full font-mono">
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
          Type 'help' for a list of available commands
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
