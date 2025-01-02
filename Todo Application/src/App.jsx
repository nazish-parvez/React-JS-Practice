import React from "react";
import TodoMain from "./components/TodoMain";
import Parent from "./components/forwardRef/Parent";

const App = () => {
  return (
    <>
      {/* <TodoMain /> */}
      <Parent />
    </>
  );
};

export default App;


/////

// import React from "react";

// const Child = (props) => {
//   return (
//     <div>
//       <label>{props.inputLabel}</label>
//       <input type="text" ref={props.ref} />
//     </div>
//   );
// };

// export default Child;
