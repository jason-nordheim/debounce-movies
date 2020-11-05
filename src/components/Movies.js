import React from 'react' 

/**
 * Movies Container 
 * @param {{string, function}} props  
 */
export const Movies = ({search}) => (
    <div className="movies">
        {search}
    </div>
)

export default Movies  