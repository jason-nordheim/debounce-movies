import React from "react";

import { MovieCard } from './MovieCard'

/**
 * Movies Container
 * @param {{searchResults}} collection of movies 
 */
export const Movies = ({ searchResults }) => (
    <div className="movies">
        {  searchResults !== undefined && searchResults !== [] 
            ? searchResults.map(m => <MovieCard key={m.imdbID} movie={m} /> ) 
            : null} 
    </div> 
) 

export default Movies;
