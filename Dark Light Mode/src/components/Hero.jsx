import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../context/ThemeData";

const Hero = () => {
  const ThemeData = useContext(ThemeContext);
  return (
    <div className={`flex flex-col justify-center items-center h-screen gap-12 transition-all duration-700 ${
        ThemeData.theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1 className={`text-7xl transition-all duration-700 ${
          ThemeData.theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Dark Light Mode Website
      </h1>

      <p className={`text-5xl transition-all duration-700 ${
          ThemeData.theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Hello I am using React JS {ThemeData.theme === "dark" ? "🌙" : "☀️"}
      </p>

      <Button />
    </div>
  );
};

export default Hero;
