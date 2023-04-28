import "./home.css";
import ToDOList from "../ToDoList/ToDoList";
import SearchBar from "../SearchBar/SearchBar";
import Additem from "../Additems/Additem";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      Item: "Brush my Teeth",
      isComplete: true,
    },
    {
      id: 2,
      Item: "Meditate and Exercise",
      isComplete: false,
    },
    {
      id: 3,
      Item: "Brush my Teeth",
      isComplete: false,
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, Item: item, isComplete: false };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    console.log(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <section className="main-container">
      <article className="container">
        <h2 className="title">To Do List</h2>
        <Additem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchBar search={search} setSearch={setSearch} />
        <ToDOList
          items={items.filter((item) =>
            item?.Item?.toLowerCase().includes(search?.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </article>
    </section>
  );
}

export default Home;
