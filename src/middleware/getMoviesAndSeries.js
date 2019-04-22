const express = require('express');
const router = express.Router();
const wrapper = require('./apiMiddleware');

router.get('/:requestParams', (req, res) => {
    wrapper.apiHandler(req.params.requestParams.split('&')).then((response) => {
        res.send(response)
    })
});


module.exports = router;