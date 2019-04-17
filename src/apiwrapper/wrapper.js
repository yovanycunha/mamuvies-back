const request = require('request');
const fetch = require('node-fetch')


const apiWrapper =( () => {

    /**
     * Searchs any movie or serie with that contains the title
     * @param {*} title 
     */
    const _searchAnyByTitle = async (title) => {
        return fetch('http://www.omdbapi.com/?s='+ title +'&apikey=ebcafd7d')
            .then(data=>{return data.json()})
            .then(res=>{
                // console.log(res);
                return res
            })
            .catch(err=>{console.log(err)});
    }

    /**
     * Search only series that contains the title
     * @param {*} serieTitle 
     */
    const _searchSerieByTitle = async (serieTitle) => {
        return fetch('http://www.omdbapi.com/?s='+ serieTitle +'&type=series&apikey=ebcafd7d')
        .then(data=>{return data.json()})
        .then(res=>{
            // console.log(res);
            return res
        })
        .catch(err=>{console.log(err)});
    }

    /**
     * Search only movies that contains the title
     * @param {*} serieTitle 
     */
    const _searchMovieByTitle = async (movieTitle) => {
        return fetch('http://www.omdbapi.com/?s='+ movieTitle +'&type=movie&apikey=ebcafd7d')
        .then(data=>{return data.json()})
        .then(res=>{
            // console.log(res);
            return res
        })
        .catch(err=>{console.log(err)});
    }
    
    /**
     * Search a serie or movie with a especific id
     * @param {*} serieTitle 
     */
    const _searchAnyById = async (id) => {
        return fetch('https://omdbapi.com/?i='+ id +'&apikey=ebcafd7d')
        .then(data=>{return data.json()})
        .then(res=>{
            // console.log(res);
            return res
        })
        .catch(err=>{console.log(err)});
    }


    return {
        searchAll : _searchAnyByTitle,
        searchSeries: _searchSerieByTitle,
        searchmovies: _searchMovieByTitle,
        searchById: _searchAnyById,
    }
})();

module.exports = apiWrapper;

