var express = require('express');
var router = express.Router();
var path = require('path');
var homedir = require('os').homedir();

/* GET home page. */

router.get('/', function(req, res) {
	res.sendFile(path.join(homedir, 'apps/fe-serve/public/build' + '/index.html'));
});

router.get('/test', function() {
	res.redirect('/');
});

module.exports = router;
