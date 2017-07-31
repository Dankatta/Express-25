const express = require('express')
    ,toastr = require('express-toastr');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


module.exports = function(data) {
    const app = express();
    app.use(require('connect-flash')());
    app.use((req, res, next) => {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });

    app.set('view engine', 'pug');

    app.use('/static', express.static('public'));
    app.use('/libs', express.static('node_modules'));

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: 'secret1',
        resave: true,
        saveUninitialized: true,
    }));

    require('./passport/index')(app, data);
    // require('passport/local-strategy')(app, data);

    return app;
};