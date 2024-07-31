// src/components/CommandMenu.js
import React, { useState } from "react";
import "./CommandMenu.css";

const CommandMenu = ({ commands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = commands.filter((command) =>
        command.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCommands(filtered);
    } else {
      setFilteredCommands([]);
    }
  };

  const handleCommandSelect = (command) => {
    command.action();
    setInputValue("");
    setFilteredCommands([]);
    setIsOpen(false);
  };

  return (
    <div className="command-menu">
      <button onClick={handleToggleMenu} className="command-menu-button">
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isOpen && (
        <div className="command-menu-dropdown">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a command..."
            className="command-menu-input"
          />
          {filteredCommands.length > 0 && (
            <ul className="command-menu-list">
              {filteredCommands.map((command, index) => (
                <li
                  key={index}
                  onClick={() => handleCommandSelect(command)}
                  className="command-menu-item"
                >
                  {command.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CommandMenu;
