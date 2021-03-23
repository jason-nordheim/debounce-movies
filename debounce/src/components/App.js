// imports
import React, { useState } from "react";
import { searchAny } from "../util/omniMovieApi";

// styles
import "./App.css";

// components
import Search from "./Search";
import Movies from "./Movies";
import { useDebounceEffect } from "../hooks/useDebounceEffect";

/**
 * Root Application component
 */
const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

    /**
     * 
     */
  useDebounceEffect(() => {
    if (search) {
      searchAny(search).then((searchResults) => {
        setResults(searchResults.Search);
      });
    }
  }, [search]);

  return (
    <div className="app">
      <header>🎥 Movie Finder 🍿</header>
      <main>
        <Search value={search} setValue={setSearch} />
        <Movies searchResults={results} />
      </main>
    </div>
  );
};

export default App;
