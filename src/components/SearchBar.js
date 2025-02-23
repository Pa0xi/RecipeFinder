import React from "react";
import "../styles/search-bar.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearch}
        className="search-input"
      />
      <button className="search-button">🔍</button>
    </div>
  );
};

export default SearchBar;