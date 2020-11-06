// imports 
import React from 'react' 

/**
 * Component for filtering the movies 
 * @param {{searchResults}} props 
 */
const YearFilter = ({ searchResults }) =>  {

  // no filter if 
  if(searchResults && searchResults.length < 1) return null

  // get all the different years
  const years = searchResults.reduce((acc, movie) => {
    if(!acc.includes(movie.Year)) {
      acc = [...acc, movie.Year] 
    }
    return acc 
  },[]);


  // map the different years to
  const options = years.map((year) => {
    return <option key={year}>{year}</option>;
  });


  return (
    <div className="yearFilter">
      <label>Year</label>
      <select>{options}</select>
    </div>
    )  
}

export default YearFilter