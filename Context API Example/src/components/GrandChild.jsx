import React, { useContext } from "react";
import GrandGrandChild from "./GrandGrandChild";
import { Data } from "../context/AllData";

const GrandChild = () => {
  const data = useContext(Data);
  return (
    <div>
      <h3>GrandChild</h3>

      <div>
        Count Value: {data.count}

        <button
          className="bg-purple-950 px-4 py-3 text-white rounded-lg"
          onClick={() => {
            data.setCount(data.count + 1);
          }}
        >
          GrandChild Ma Increment
        </button>
      </div>
      <GrandGrandChild />
    </div>
  );
};

export default GrandChild;
