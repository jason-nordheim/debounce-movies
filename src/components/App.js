// imports 
import React, { useState } from 'react' 

// styles 
import './App.css'

// components 
import Search from './Search'
import Movies from './Movies'

/**
 * Root Application component 
 */
const App = ()  => {
  const [search, setSearch] = useState('')
  
  return (
    <div className="app">
      <header>Debounce Movies</header>
      <main>
        <Search value={search} setValue={setSearch}/> 
        <Movies search={search} /> 
      </main>
    </div>
  );
}

export default App;
