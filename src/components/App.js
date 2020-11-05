// imports 
import React, { useState } from 'react' 

// styles 
import './App.css'

// components 
import Search from './Search'

const App = ()  => {
  const [search, setSearch] = useState('')
  
  return (
    <div className="app">
      <header>Debounce Movies</header>
      <Search value={search} setValue={setSearch}/> 
    </div>
  );
}

export default App;
