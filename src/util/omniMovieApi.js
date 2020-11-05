// imports 
import Axios from "axios"
import { OmdbApiKey } from "./config" 



//const baseUrl = `http://www.omdbapi.com/?apikey=${OmdbApiKey}`
const baseUrl = `http://www.omdbapi.com/` 


/**
 * Search for a film by title or ID 
 * @param {string} i IMDB movie Id (optional)
 * @param {string} t title of movie to search for (optional) 
 * @param {string} type "movie" | "series" | "episode" -- filter returned by type -- (optional)
 * @param {string} plot "short" | "full" -- return short/long plot summary --  (optional) 
 * @param {number} y year released (optional)
 * @param {string} r "json" 
 */
export const search = (i=null, t=null, type=null, y=null, plot='short', r='json') => {
    const params = buildSearch(i, t, type, y, plot, r) 
    Axios.get(baseUrl, { params })
        .then(res => console.log(res.data))
}

/**
 * Create the params object to search for a movie by title or Id 
 * @param {string} i IMDB movie Id (optional)
 * @param {string} t title of movie to search for (optional) 
 * @param {string} type "movie" | "series" | "episode" -- filter returned by type -- (optional)
 * @param {string} plot "short" | "full" -- return short/long plot summary --  (optional) 
 * @param {number} y year released (optional)
 * @param {string} r "json" | "xml"
 */
const buildSearch = (i, t, type, y, plot, r) => {
    const plot_options = ['short', 'full']  // 0 = default value 
    const r_options = ['json', 'XML'] // 0 = default value 

    const params = { apikey: OmdbApiKey} 

    if(i) params['i'] = i 
    if(t) params['t'] = t 
    if(type) params['type'] = type
    if(y) params['y'] = y 
    if(plot && plot !== plot_options[0]) params['plot'] = plot
    if(r && r !== r_options[0]) params['r'] = r 

    return params
}