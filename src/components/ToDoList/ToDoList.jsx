import React from "react";
import "./todo.css";
import { FaTrashAlt } from "react-icons/fa";

function ToDoList({ items, handleCheck, handleDelete }) {
  return (
    <main className="List">
      {items.length ? (
        <ul className="list-items">
          {items.map(({ id, Item, isComplete }) => (
            <li className="item" key={id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(id)}
                checked={isComplete}
              />
              <label
                style={isComplete ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(id)}
              >
                {Item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}

export default ToDoList;
