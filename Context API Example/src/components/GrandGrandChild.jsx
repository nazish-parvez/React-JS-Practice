import React from "react";
import { useAllData } from "../context/AllData";

const GrandGrandChild = () => {
  const data = useAllData();

  return (
    <div>
      <h4>GrandGrandChild</h4>

      <p>I Love {data.myLang}</p>

      <p>And i use this {data.myInstall}</p>
    </div>
  );
};

export default GrandGrandChild;
