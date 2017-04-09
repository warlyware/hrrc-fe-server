var express = require('express');
var router = express.Router();
var path = require('path');
var homedir = require('os').homedir();
var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

router.post('/submit', (req, res, next) => {
    console.log(req);

    var data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'fake-email@mail.ru',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        return res.send(body);
    });



});

module.exports = router;
