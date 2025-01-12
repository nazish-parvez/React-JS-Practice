import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username.current.value}`);
    console.log(`Password: ${password.current.value}`);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Child ref={username} inputLabel="Username" />
        <Child ref={password} inputLabel="Password" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Parent;
