import React, { useState } from "react";
import styled from "styled-components";
import "tailwindcss/tailwind.css";

const TerminalContainer = styled.div`
  @apply bg-black text-green-500 font-mono p-5 h-screen flex flex-col;
`;

const TerminalOutput = styled.div`
  @apply flex-grow overflow-y-auto;
`;

const TerminalInput = styled.input`
  @apply bg-black text-green-500 border-none outline-none font-mono text-lg w-full;
`;

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setHistory([...history, input]);
      setInput("");
    }
  };

  return (
    <TerminalContainer>
      <TerminalOutput>
        <div>Welcome to My Portfolio Terminal!</div>
        <div>Name: Your Name</div>
        <div>Work Experience: Your Work Experience</div>
        <div>Education: Your Education</div>
        <div>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            className="text-green-500"
          >
            Your LinkedIn
          </a>
        </div>
        <div>
          Email:{" "}
          <a href="mailto:your.email@example.com" className="text-green-500">
            your.email@example.com
          </a>
        </div>
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </TerminalOutput>
      <TerminalInput
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </TerminalContainer>
  );
};

export default Terminal;
