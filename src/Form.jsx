import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      toast.error("Please enter a value");
      return;
    }
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
