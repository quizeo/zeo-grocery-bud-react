import React, { useState } from "react";

const SingleItem = ({ name, completed, id, index, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={
          completed
            ? { textDecoration: "line-through", textTransform: "capitalize" }
            : { textTransform: "capitalize" }
        }
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default SingleItem;
