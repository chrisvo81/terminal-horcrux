# Terminal Portfolio

This is a terminal-like web application built using React and TypeScript. I think it's a fun way to showcase my resume. The interface mimics a terminal, and chat-able feature, providing an interactive experience for visitors.

> **Inspired by the Harry Potter Horcrux diary 😈 and the vintage Fallout 4 Terminals!**

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Demo

You can view a live demo of the project [here](#).

## Features

- **Terminal-like Interface**: Mimics a command-line terminal for a unique user experience.
- **Interactive**: Users can type commands and see them reflected in the terminal.
- **Styled with Tailwind CSS**: Utilizes Tailwind CSS for quick and efficient styling.
- **Dynamic Styling with Styled-Components**: Combines the power of styled-components with Tailwind CSS for dynamic styles.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Styled-Components**: Utilizes tagged template literals to style your components.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up Tailwind CSS**:

   Ensure your `tailwind.config.js` and `postcss.config.js` are correctly configured.

   **`tailwind.config.js`**:

   ```js
   module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false,
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

   **`postcss.config.js`**:

   ```js
   module.exports = {
     plugins: [require("tailwindcss"), require("autoprefixer")],
   };
   ```

4. **Run the project**:

   ```sh
   npm start
   ```

   This will start the development server and open the application in your default browser.

## Usage

After starting the application, you will see a terminal-like interface displaying your name, work experience, education, LinkedIn profile, and email address. Users can interact with the terminal by typing commands and pressing the Enter key.

### Terminal Component

The `Terminal.tsx` component handles the terminal interface. It uses styled-components for custom styling and Tailwind CSS for utility classes.

**`Terminal.tsx`**:

```tsx
import React, { useState } from "react";
import styled from "styled-components";
import "tailwindcss/tailwind.css";

const TerminalContainer = styled.div.attrs({
  className: "bg-black text-green-500 font-mono p-5 h-screen flex flex-col",
})``;

const TerminalOutput = styled.div.attrs({
  className: "flex-grow overflow-y-auto",
})``;

const TerminalInput = styled.input.attrs({
  className:
    "bg-black text-green-500 border-none outline-none font-mono text-lg w-full",
})``;

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
```
