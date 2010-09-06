
/**
 * Module dependencies.
 */

var express = require('express'),
    messages = require('express-messages'),
    contrib = require('express-contrib');

module.exports = {
    'test contrib export': function(assert){
        assert.equal(contrib.messages, messages);
    },

    'test messages dynamic helper': function(assert){
        var app = express.createServer();
        app.dynamicHelpers({ messages: messages });
        
        app.get('/', function(req, res, next){
            res.render('messages.ejs', {
                layout: false
            });
        });

        var html = [
            '<div id="messages">',
            '  <ul class="info">',
            '    <li>info one</li>',
            '    <li>info two</li>',
            '  </ul>',
            '  <ul class="error">',
            '    <li>error one</li>',
            '  </ul>',
            '</div>'
        ].join('');

        assert.response(app,
            { url: '/' },
            { body: html });
    }
};