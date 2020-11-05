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

export const MovieCard = ({ movie }) => {
    const { Title, Poster } = movie 

    return (
        <div className="movieCard">
            <h4>{Title}</h4>
            <img aria-label={Title} src={Poster} /> 
        </div>
    )


}

export default MovieCard() 