const express = require('express');
const router = express.Router();
const wrapper = require('./apiRequests');

router.get('/:title', (req, res) => {
    wrapper.getMoviesAndSeries(req.params.title).then((response) => {
        (response.Response === 'True') ? (response.Response = true) : (response.Response = false)
        res.send(response);
    });
});


module.exports = router;