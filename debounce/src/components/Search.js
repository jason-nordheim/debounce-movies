import React from "react";

/**
 * Search bar
 * @param {{string, function, function}} props
 */
export const Search = ({ value, setValue, onSearch }) => (
  <form className="search" onSubmit={onSearch}>
    <input
      type="text"
      placeholder="Movie name..."
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
    <button onClick={onSearch}>Search</button>
  </form>
);

export default Search;
