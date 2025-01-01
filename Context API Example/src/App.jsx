import React from "react";
import Parent from "./components/Parent";
import { DataProvider } from "./context/AllData";

const App = () => {
  return (
    <DataProvider>
      <Parent />
    </DataProvider>
  );
};

export default App;
