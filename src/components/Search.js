import React from 'react' 

/**
 * Search bar 
 * @param {{string, function}} props  
 */
export const Search = ({value, setValue, onSearch}) => (
    <div className="search">
        <input 
            type="text" 
            placeholder="Movie name..." 
            value={value} 
            onChange={(e) => setValue(e.currentTarget.value)}
        /> 
        <button onClick={onSearch}>Search</button>
    </div>
)

export default Search 