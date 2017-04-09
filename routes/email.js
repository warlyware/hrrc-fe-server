var express = require('express');
var router = express.Router();
var path = require('path');
var homedir = require('os').homedir();
var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

router.post('/submit', (req, res, next) => {
    console.log(req.body);

    var data = {
        from: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,
        to: 'submissions.hrrc@gmail.com',
        subject: 'Contact Form Submission',
        text: `
            The following user has requested to be contacted:
            Name: ${req.body.firstName} ${req.body.lastName}
            Email: ${req.body.email}
        `
    };

    mailgun.messages().send(data, function (error, body) {
        return res.send(body);
    });

});

module.exports = router;
