# Debounce Movies  

This project was created to illustrate the purpose of debounce in a React application. 

Initial source code was generated from [Create React App](https://github.com/facebook/create-react-app). 

## Project Structure 

You will find the directory structured as follows: 
```
.
├── node_modules
├── public
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
└── src
    └── components
        ├── App.css
        ├── App.js
        ├── MovieCard.js
        ├── Movies.js
        └── Search.js
    data
        ├── sampleRes_All.json
        └── sampleRes_Single.json
    index.js 
    util
        ├── omniMovieApi.js
        └── reportWebVitals.js
```

The `public` directory contains the template HTML files genertated through `create-react-app` 

The `src` directory is the root directory containing the project code. Within the `src/` folder:  
* `./src/index.js` is the serves as the entry point to the React application. 
* `./src/components/` directory contains all the components used in the react application.  
* `./src/data/` directory contains sample JSON responses from the API. 
* `./src/util/` directory contains helper functions supporting the React application 


## Setup 

### Requirements/Dependencies 

System Tools  
* git CLI (to clone repo)
* npm (to install packages and run scripts) 

API Keys 
* Must obtain an API key from [www.omdbapi.com](www.omdbapi.com)

Setup & Configuration 
* After cloning/downloading the project, place your API key in a file named `config.js` and export a `const` to be used in the functions that interact with the Omdb API. 

## Getting Started  

> IMPORTANT: this guide assumes you have NPM (Node package manager) as well as git installed. It will also be required that you obtains a key from the open source OMDB API used for this example. This project was also setup to reference a file in the same folder named "config.js" (`./src/util/config.js`). 

1. Clone or download the repository 
    ```bash 
    git clone https://github.com/jason-nordheim/debounce-movies.git
    ```
2. Create the config file in `./src/util/config.js` and export API key to be used in `src/util/omniMovieApi.js`: 
    ```js 
    // config.js 
    export const OmdbApiKey = `YOUR_API_KEY`;
    ```
3. Install node packages from the project root directory (execute command from project root) 
    ```bash
    npm install 
    ```
4. Start the development Server (execute command from project root) 
    ```bash 
    npm start 
    ```

## Contributions 

* Jason Nordheim - Denver, CO
    * [Github](https://github.com/jason-nordheim)
    * [LinkedIn](https://www.linkedin.com/in/jasonnordheim/)
    * [Dev.to](https://dev.to/jasonnordheim)
    * [Twitter](https://twitter.com/jason_nordheim)
