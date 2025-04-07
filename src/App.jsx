import Form from "./Form";
import React, { useState } from "react";
import Items from "./Items";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  const items = localStorage.getItem("list");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (item) => {
    console.log(item);
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
  };

  const removeItem = (index) => {
    const newItems = items.filter((item) => {
      return item.id !== index;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("Item removed from the list");
  };

  const editItem = (index) => {
    const newItems = items.map((item) => {
      if (item.id === index) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
