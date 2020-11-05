// imports
import React, { useState } from "react";
import { searchAny } from "../util/omniMovieApi";

// styles
import "./App.css";

// components
import Search from "./Search";
import Movies from "./Movies";

/**
 * Root Application component
 */
const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])

  /**
   * Event handler for clicking search
   * @param {event} e
   */
  const handleSearch = async (e) => {
    e.preventDefault(); // no refresh

    const searchResults = await searchAny(search);
    await setResults(searchResults.Search)
  };

  return (
    <div className="app">
      <header>Debounce Movies</header>
      <main>
        <Search value={search} setValue={setSearch} onSearch={handleSearch} />
        <Movies searchResults={results} />
      </main>
    </div>
  );
};

export default App;
