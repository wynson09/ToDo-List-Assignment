import React from "react";
import "./searchBar.css";
import Input from "../Input/Input";

function SearchBar({ search, setSearch }) {
  return (
    <div>
      <Input search={search} setSearch={setSearch} />
    </div>
  );
}

export default SearchBar;
