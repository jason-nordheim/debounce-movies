import React from 'react' 

/* 
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }
*/

/**
 * Movie Card component
 * @param {{movie}} props with movie object containing movie data  
 */
export const MovieCard = ({ movie }) => (
    <div className="movieCard">
        <h4>{movie.Title}</h4>
        <img alt={movie.Title} src={movie.Poster} /> 
    </div>
)


export default MovieCard 