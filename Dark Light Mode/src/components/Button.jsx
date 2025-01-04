import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeData";

const Button = () => {
  const ThemeData = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={ThemeData.handleButton}
        className="bg-purple-900 text-white px-6 py-4 text-3xl rounded-lg transition-all duration-700"
      >
        {ThemeData.theme === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"}
      </button>
    </>
  );
};

export default Button;
