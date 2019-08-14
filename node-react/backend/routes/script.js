var express = require('express');
var fs = require('fs');
var writeFile = require('write');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    console.log(req.body.node_version);
    writeFile('test_1.sh', `sudo apt-get install node@${req.body.node_version}`)
        .then(function() {
            res.download(`${__dirname}/../test_1.sh`);
            // do stuff
        });
});

module.exports = router;
