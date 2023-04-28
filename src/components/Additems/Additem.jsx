import { useRef } from "react";
import "./additem.css";

function Additem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm Input-container" onSubmit={handleSubmit}>
      <input
        className="addItemBar"
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="addBtn"
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        Add Item
      </button>
    </form>
  );
}

export default Additem;
