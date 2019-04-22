const fetch = require('node-fetch')


const apiWrapper =( () => {

    /**
     * Fields
     */
    const _KEY = '&apikey=ebcafd7d';
    const _URL_BASE = 'http://www.omdbapi.com/?';


    const _urlBuilder = (params) => {
        const urlReturned = _URL_BASE + params[0] + '=' + params[2] + '&type=' + params[1] + _KEY;

        return urlReturned;
    }
    
    /**
     * Using a url made with parameters, create a request to OMDB API
     * @param {Array<String>} requestParams A list with parameters that will constitute the omdb api's URL 
     * @returns A Promisse for the completion operation
     */
    const _apiHandler = async (requestParams) => {
      return fetch(_urlBuilder(requestParams))
      .then(data=>{return data.json()})
      .then(res=>{
          return res
      })
      .catch(err=>{console.log(err)});
    }

    return {
        apiHandler: _apiHandler,
    }
})();

module.exports = apiWrapper;

