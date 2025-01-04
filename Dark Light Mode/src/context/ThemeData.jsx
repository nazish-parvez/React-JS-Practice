import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("dark");

  const handleButton = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, handleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};
