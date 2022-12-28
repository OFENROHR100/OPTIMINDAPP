var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    let dataarray = [
        {name: "John", money: 500}
    ]

    res.json({
        data: dataarray
    })
});

module.exports = router;