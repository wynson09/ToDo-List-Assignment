import React from "react";
import "./input.css";
import { RiSearchLine } from "react-icons/ri";

function Input({ search, setSearch }) {
  return (
    <form
      className="searchForm Input-container"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="SearchBar"
        type="text"
        placeholder="Search..."
        value={search}
        role="searchbox"
        onChange={(e) => setSearch(e.target.value)}
      />
      <RiSearchLine className="searchBtn" />
    </form>
  );
}

export default Input;
