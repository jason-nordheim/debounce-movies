import React from "react";

import { MovieCard } from './MovieCard'
import YearFilter from "./YearFilter"

/**
 * Movies Container
 * @param {{searchResults}} collection of movies 
 */
export const Movies = ({ searchResults }) => (
    <div className="movies">
        <div className="filters">
        {  searchResults !== undefined && searchResults !== [] 
            ? <YearFilter searchResults={searchResults} /> 
            : null 
        }
        </div>
        <div className="results">
        {  searchResults !== undefined && searchResults !== [] 
            ? searchResults.map(m => <MovieCard key={m.imdbID} movie={m} /> ) 
            : null} 
        </div> 
    </div> 
) 

export default Movies;
