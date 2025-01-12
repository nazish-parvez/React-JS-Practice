import React, { useState } from "react";

const TodoForm = () => {
  const inputFormValueFormat = { id: "", content: "", checked: false };

  const [inputValue, setInputValue] = useState(inputFormValueFormat);

  const handleInputForm = (e) => {
    const userEnterValue = e.target.value;
    setInputValue({
      id: userEnterValue,
      content: userEnterValue,
      checked: false,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue.content}
          onChange={handleInputForm}
        />
        <button type="submit">Add Task</button>
        <button type="submit">Add Task 1</button>
        <button type="submit">Add Task 2</button>
      </form>
    </>
  );
};

export default TodoForm;
