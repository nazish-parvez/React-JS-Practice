import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { Data } from "../context/AllData";

const Child = () => {
  const data = useContext(Data);
  return (
    <div>
      <h2>Child</h2>

      <button
        className="bg-purple-950 px-4 py-3 text-white rounded-lg"
        onClick={() => {
          data.setCount(data.count - 1);
        }}
      >
        Child Ma Decrement
      </button>

      <GrandChild />
    </div>
  );
};

export default Child;
