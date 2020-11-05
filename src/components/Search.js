import React from 'react' 

/**
 * Search bar 
 * @param {{string, function}} props  
 */
export const Search = ({value, setValue}) => (
    <div className="search">
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/> 
    </div>
)

export default Search 