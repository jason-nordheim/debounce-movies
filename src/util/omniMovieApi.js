// imports
import Axios from "axios";
import { OmdbApiKey } from "./config"; // register at www.omdbapi.com to get your key

// local variables
const baseUrl = `https://www.omdbapi.com/`;

// Search params | 0 = default
const type_options = ["movie", "series", "episodes"];
const r_options = ["json", "XML"];
const plot_options = ["short", "full"];

/**
 * Search for films matching the provided title, and return ALL matching results
 * @param {string} s title of movie (required)
 * @param {string} type "movie" | "series" | "episode"
 * @param {number} y release year
 * @param {string} r "json" | "xml" - format to return
 * @param {number} page page number to return
 */
export const searchAny = async (
  s = null,
  type = null,
  y = null,
  r = "json",
  page = 1
) => {
  const params = buildSearchAny(s, type, y, r, page);
  const res = await Axios.get(baseUrl, { params });
  return res.data;
};

/**
 * Creates the parameters for multi-result search requests
 * @param {string} s title of movie (required)
 * @param {string} type "movie" | "series" | "episode"
 * @param {number} y release year
 * @param {string} r "json" | "xml" - format to return
 * @param {number} page page number to return
 */
const buildSearchAny = (s, type, y, r, page) => {
  // validate input
  if (!s) throw new Error("must include search title");

  // apply API key to params object
  const params = { apikey: OmdbApiKey };

  // build params
  if (s && typeof s == "string") params["s"] = s;
  if (type && type_options.includes(type)) params["type"] = type;
  if (y) params["y"] = y;
  if (r && r !== r_options[0]) params["r"] = r;
  if (page) params["page"] = page;

  return params;
};

/**
 * Search for a film by title or ID
 * @param {string} i IMDB movie Id (optional)
 * @param {string} t title of movie to search for (optional)
 * @param {string} type "movie" | "series" | "episode" -- filter returned by type -- (optional)
 * @param {string} plot "short" | "full" -- return short/long plot summary --  (optional)
 * @param {number} y year released (optional)
 * @param {string} r "json"
 */
export const searchOne = async (
  i = null,
  t = null,
  type = null,
  y = null,
  plot = "short",
  r = "json"
) => {
  const params = buildSingleSearch(i, t, type, y, plot, r);
  const res = await Axios.get(baseUrl, { params });
  return res.data;
};

/**
 * Create the params object to search for a movie by title or Id
 * @param {string} i IMDB movie Id (optional)
 * @param {string} t title of movie to search for (optional)
 * @param {string} type "movie" | "series" | "episode" -- filter returned by type -- (optional)
 * @param {string} plot "short" | "full" -- return short/long plot summary --  (optional)
 * @param {number} y year released (optional)
 * @param {string} r "json" | "xml"
 */
const buildSingleSearch = (i, t, type, y, plot, r) => {
  // validate input
  if (i && t) throw new Error("cannot search by both id [i] and title [t]");
  else if (!i && !t)
    throw new Error("must search by either id [i] or title [t]");

  // apply API key to params object
  const params = { apikey: OmdbApiKey };

  // add additional params as needed
  if (i) params["i"] = i;
  if (t) params["t"] = t;
  if (type && type_options.includes(type)) params["type"] = type;
  if (y) params["y"] = y;
  if (plot && plot !== plot_options[0]) params["plot"] = plot;
  if (r && r !== r_options[0]) params["r"] = r;

  return params;
};
