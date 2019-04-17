const request = require('request');

const apiWrapper = () => {

    /**
     * Searchs any movie or serie with that contains the title
     * @param {*} callback 
     * @param {*} title 
     */
    const _searchAnyBytitle = async (callback, title) => {
        const results = [];
        request('http://www.omdbapi.com/?s='+ title +'&apikey=ebcafd7d', (error, response, body) => {
            if (!error && response.statusCode == 200)  {
                results = body;
                return console.log(body);
            }
        });
    }
  
}

