const fetch = require('node-fetch')


const apiWrapper =( () => {

    /**
     * Fields
     */
    const _KEY = '&apikey=ebcafd7d';
    const _ONLY_SERIES = '&type=series';
    const _ONLY_MOVIES = '&type=movie';


    /**
     * Searchs any movie or serie with that contains the title
     * @param {String} showTitle 
     * @returns {JSON} Object with following properties: 
     * 'Search' - List of movies or series searched
     * 'totalResults': - Amount of shows that were found
     * 'Response': - A boolean that represents a sucessful search
     */
    const _getMoviesAndSeries = async (showTitle) => {
        return fetch('http://www.omdbapi.com/?s='+ showTitle +_KEY)
            .then(data=>{
                return data.json()})
            .then(res=>{
                return res
            })
            .catch(err=>{console.log(err)});
    }

    /**
     * Search only series that contains the title
     * @param {*} serieTitle 
     */
    const _getSeriesByTitle = async (serieTitle) => {
        return fetch('http://www.omdbapi.com/?s='+ serieTitle +_ONLY_SERIES + _KEY)
        .then(data=>{return data.json()})
        .then(res=>{
            return res
        })
        .catch(err=>{console.log(err)});
    }

    /**
     * Search only movies that contains the title
     * @param {*} serieTitle 
     * @returns JSON with movies searched
     */
    const _getMoviesByTitle = async (movieTitle) => {
        return fetch('http://www.omdbapi.com/?s='+ movieTitle +_ONLY_MOVIES + _KEY)
        .then(data=>{return data.json()})
        .then(res=>{
            return res
        })
        .catch(err=>{console.log(err)});
    }
    
    /**
     * Search a serie or movie by a especific id
     * @param {*} serieTitle 
     */
    const _getAnyById = async (id) => {
        return fetch('https://omdbapi.com/?i='+ id +_KEY)
        .then(data=>{return data.json()})
        .then(res=>{
            return res
        })
        .catch(err=>{console.log(err)});
    }


    return {
        getMoviesAndSeries :    _getMoviesAndSeries,
        getOnlySeries:          _getSeriesByTitle,
        getOnlyMovies:          _getMoviesByTitle,
        getById:                _getAnyById,
    }
})();

module.exports = apiWrapper;

