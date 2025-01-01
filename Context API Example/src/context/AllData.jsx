import { createContext, useContext, useState } from "react";

export const Data = createContext();

export const DataProvider = ({ children }) => {
  const myLang = "React JS and Next JS";
  const myInstall = "Vite Framework";
  const [count, setCount] = useState(0);
  return (
    <Data.Provider value={{ myLang, myInstall, count, setCount }}>
      {children}
    </Data.Provider>
  );
};

// Custom Hook

export const useAllData = () => {
  const a = useContext(Data);
  return a;
};
