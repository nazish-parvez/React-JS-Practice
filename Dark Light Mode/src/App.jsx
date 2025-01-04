import React from "react";
import Hero from "./components/Hero";
import { ThemeProvider } from "./context/ThemeData";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    </>
  );
};

export default App;
