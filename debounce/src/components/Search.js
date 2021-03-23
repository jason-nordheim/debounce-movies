import React from "react";

/**
 * Search bar
 *
 * onSubmit event overridden to prevent page from refreshing
 * @param {{string, function, function}} props
 */
export const Search = ({ value, setValue }) => (
  <form className="search" onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      placeholder="Movie name..."
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  </form>
);

export default Search;
