// src/App.js
import React from "react";
import CommandMenu from "./CommandMenu";
//import "./App.css";

const App = () => {
  const commands = [
    { name: "Command 1", action: () => alert("Command 1 executed") },
    { name: "Command 2", action: () => alert("Command 2 executed") },
    { name: "Command 3", action: () => alert("Command 3 executed") },
    { name: "Command 4", action: () => alert("Command 4 executed") },
  ];

  return (
    <div className="App">
      <h1>Command Menu Demo</h1>
      <CommandMenu commands={commands} />
    </div>
  );
};

export default App;
